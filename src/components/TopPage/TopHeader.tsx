import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

const TopHeader: FC = () => {
    return (
        <AppBar position='static'>
            <ToolBar>
                <h2>React with TypeScript</h2>
            </ToolBar>
        </AppBar>
    );
}

export default TopHeader;