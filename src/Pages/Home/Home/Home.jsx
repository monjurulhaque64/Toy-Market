import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import Subscribr from '../Subscribe/Subscribr';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
            <Partners></Partners>
            <Subscribr></Subscribr>
            <Footer></Footer>
        </div>
    );
};

export default Home;