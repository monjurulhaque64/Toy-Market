import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;