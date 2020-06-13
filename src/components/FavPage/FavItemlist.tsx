import React, { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import { TileData } from '../../types/types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
    createStyles({
        favImage: {
            height: '200px',
            width: '200px'
        },
        main: {
            textAlign: 'center',
            marginTop: '100px',
        },
        btn: {
            marginTop: '10px'
        }
    }),
)

const FavItemlist: FC = () => {
    const history = useHistory();
    const classes = useStyles();
    const [data, setData] = useState<TileData[]>([]);

    const getData = async () => {
        const db = firebase.firestore();
        const tileDataRef = db.collection('tileData');
        const favDataRef = tileDataRef.where('favorite', '==', true);
        const snapShot = await favDataRef.get();
        const temporaryData: object[] = [];

        snapShot.docs.map((doc) => {
            temporaryData.push(doc.data());
        });

        setData(temporaryData as TileData[]);
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const clear = (target: string) => {
        const db = firebase.firestore();
        const tileDataRef = db.collection('tileData');
        const favDataRef = tileDataRef.doc(target);
        favDataRef.update({
            favorite: false
        });
    }

    const clearButton = (target: string) => {
        return (
            <div>
                <Button variant="contained" onClick={() => clear(target)} key={target}>お気に入り解除</Button>
            </div>
        )
    }

    const showFavImage = () => {
        return (
            <div>
                {data.length != 0
                    ?
                    <div>
                        {data.map((tile) => (
                            <div key={tile.title}>
                                <img src={tile.image} alt={tile.title} className={classes.favImage} />
                                <h3>{tile.title}</h3>
                                {clearButton(tile.title)}
                            </div>
                        ))}
                    </div>
                    :
                    <p>お気に入り画像はありません</p>
                }
            </div>
        )
    }

    return (
        <div className={classes.main}>
            {showFavImage()}
            <Button variant="contained" onClick={() => history.push('/')} className={classes.btn}>TOPPAGEに戻る</Button>
        </div>
    );
}

export default FavItemlist;