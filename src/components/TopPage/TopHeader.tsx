import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const TopHeader: FC = () => {
    const history = useHistory();

    return (
        <AppBar position='static'>
            <ToolBar>
                <h2>React with TypeScript</h2>
                <Button variant="contained" onClick={() => history.push('/favorite/')}>お気に入り</Button>
            </ToolBar>
        </AppBar>
    );
}

export default TopHeader;