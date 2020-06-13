import React, { FC } from 'react';
import TopHeader from '../components/TopPage/TopHeader';
import TopFooter from '../components/TopPage/TopFooter';
import FavItemlist from '../components/FavPage/FavItemlist';

const FavPage: FC = () => {
    return (
        <div>
            <TopHeader/>
            <FavItemlist/>
            <TopFooter/>
        </div>
    );
}

export default FavPage;