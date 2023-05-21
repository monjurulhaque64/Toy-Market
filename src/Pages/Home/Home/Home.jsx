import React from 'react';

import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import Subscribr from '../Subscribe/Subscribr';

const Home = () => {
    return (
        <div className='container mx-auto'>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <Partners></Partners>
            <Subscribr></Subscribr>
            
        </div>
    );
};

export default Home;