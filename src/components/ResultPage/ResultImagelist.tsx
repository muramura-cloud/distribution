import React, { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import { TileData } from '../../types/types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%',
            textAlign: 'center',
            marginTop: '2%',
        },
        tileImage: {
            height: '218px',
            width: '218px'
        }
    }),
)

const ImageItemlist: FC = () => {
    const [data, setData] = useState<TileData[]>([]);
    const { keyword } = useParams();
    const classes = useStyles();
    const history = useHistory();

    const getData = async (searchWord: string | undefined) => {
        const db = firebase.firestore();
        const tileDataRef = db.collection('tileData');
        const searchData = tileDataRef.where('keyword', 'array-contains', searchWord);
        const snapShot = await searchData.get();
        const temporaryData: object[] = [];
        snapShot.docs.map((doc) => {
            temporaryData.push(doc.data());
        });
        setData(temporaryData as TileData[]);
    }

    const favClick = async (target: string) => {
        const db = firebase.firestore();
        const tileDataRef = db.collection('tileData');
        const favDataRef = tileDataRef.doc(target);
        //doc()にはドキュメントIDを入れる。ドキュメント🆔とはドキュメントの名前のことである。
        favDataRef.update({
            favorite: true
        });
    }

    useEffect(() => {
        getData(keyword);
    }, []);

    return (
        <div className={classes.root}>
            {data.length != 0
                ?
                <div>
                    {data.map((tile) => (
                        <div key={tile.title}>
                            <Button onClick={() => history.push('/download/' + tile.title)}>
                                <img src={tile.image} alt={tile.title} className={classes.tileImage} />
                            </Button>
                            <h3>{tile.title}</h3>
                            <Button variant="contained" onClick={() => favClick(tile.title)}>お気に入り登録</Button>
                        </div>
                    ))}
                </div>
                :
                <p>入力に合致する素材はありません。</p>
            }
            <Button variant="contained" onClick={() => history.push('/')}>TOPPAGEに戻る</Button>
        </div>
    );
}

export default ImageItemlist;