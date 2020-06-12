import React, { FC, useState, useEffect } from 'react';
import TopHeader from '../components/TopPage/TopHeader';
import TopFooter from '../components/TopPage/TopFooter';
import DownloadItem from '../components/DownloadPage/DownloadItem';

const DownloadPage: FC = () => {
    return (
        <div>
            <TopHeader />
            <DownloadItem/>
            <TopFooter/>
        </div>
    );
}

export default DownloadPage;