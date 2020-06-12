import React, { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TileData } from '../../types/types';

const useStyles = makeStyles(() =>
    createStyles({
        tileImage: {
            height: '436px',
            width: '436px'
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

const DownloadItem: FC = () => {
    const { keyword } = useParams();
    const history = useHistory();
    const classes = useStyles();
    const [data, setData] = useState<TileData[]>([]);

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

    useEffect(() => {
        getData(keyword);
    }, []);

    const displayImage = () => {
        return (
            <div>
                {data.map((tile) => (
                    <div key={tile.title}>
                        <img src={tile.image} alt={tile.title} className={classes.tileImage} />
                    </div>
                ))}
            </div>
        )
    }

    const downloadButton = () => {
        return (
            <div>
                {data.map((tile) => (
                    <Button variant="contained" href={tile.downloadUrl} key={tile.title}>Download</Button>
                ))}
            </div>
        )
    }

    return (
        <div>
            <div className={classes.main}>
                {displayImage()}
                {downloadButton()}
                <Button variant="contained" onClick={() => history.push('/')} className={classes.btn}>TOPPAGEに戻る</Button>
            </div>
        </div>
    );
}

export default DownloadItem;