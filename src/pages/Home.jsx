import React from 'react';
import Hero from '../components/Hero';
import HowInWorks from '../components/HowItWorks';
import AvailableCars from '../components/AvailableCars';
import DownloadApp from '../components/DownloadApp';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HowInWorks></HowInWorks>
            <AvailableCars></AvailableCars>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;