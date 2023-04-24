import React, { useContext } from 'react';
import { dataContext } from './providers/AuthProviders';
import Carosel from './Carosel';
import MainContent from './MainContent';

const Home = () => {

    return (
        <div>
            
            <Carosel></Carosel>
            <div className='my-16 text-center'>
                <h1 className='text-2xl font-bold underline'>Some Of Our Luxury Rooms</h1>
            </div>
            <MainContent></MainContent>
        </div>
    );
};

export default Home;