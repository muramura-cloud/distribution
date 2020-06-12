import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        footer: {
            backgroundColor: '#1B2F73',
            textAlign: 'center',
            color: 'white',
            padding: '30px 0px',
        },
        footer_p: {
            margin: '0px',
            fontSize: '20px',
        }
    })
)

const TopFooter: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <p className={classes.footer_p}>Copy Right Murata Riku</p>
        </div>
    );
}

export default TopFooter;