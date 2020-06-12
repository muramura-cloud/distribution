import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import rebius from '../../assets/images/1.jpg';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconBtn from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: `url(${rebius})`,
            backgroundSize: 'cover',
            height: '100vh',
        },
        paper: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '33%',
            width: '45%',
        },
        inputbase: {
            width: '80%'
        }
    }),
)

const TopMain: FC = () => {
    const classes = useStyle();
    //定義したuseStyleをこのコンポーネントで使えるようにした。
    const [keyword, setKeyword] = useState('');
    //値を保持する変数とその変数を処理する関数を定義する
    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
        //ここの関数の引数にセットされるものが変数keywordに格納される。
    }

    const handleSubmit = () => {
        history.push("/search/" + keyword);
    }
    
    return (
        <div className={classes.background}>
            <Paper className={classes.paper} onSubmit={handleSubmit} component="form">
                <IconBtn type="submit">
                    <SearchIcon />
                </IconBtn>
                <InputBase placeholder="検索する文字列を入力してください。" className={classes.inputbase} onChange={handleChange} />
            </Paper>
        </div>
    )
}

export default TopMain;