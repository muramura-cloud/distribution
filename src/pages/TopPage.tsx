import React, { FC } from 'react';
//FCは関数コンポーネント
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import TopHeader from '../components/TopPage/TopHeader';
import TopFooter from '../components/TopPage/TopFooter';
import TopMain from '../components/TopPage/TopMain';
import DownloadPage from './DownloadPage';
import ResultPage from './ResultPage';
import FavPage from './FavPage';


//関数コンポーネント 関数にFC型をセットしてFC型の戻り値を返すように設定する。
const TopPage: FC = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <TopHeader />
                        <TopMain />
                        <TopFooter />
                    </Route>
                    <Route path="/search/:keyword" exact>
                        <ResultPage/>
                    </Route>
                    <Route path="/download/:keyword" exact>
                        <DownloadPage/>
                    </Route>
                    <Route path="/favorite/">
                        <FavPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default TopPage;