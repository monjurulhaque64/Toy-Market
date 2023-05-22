import React from 'react';

import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import Subscribr from '../Subscribe/Subscribr';
import Product from '../Products/Product';

const Home = () => {
    return (
        <div className='container mx-auto'>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <Product></Product>
            <Partners></Partners>
            <Subscribr></Subscribr>
            
        </div>
    );
};

export default Home;