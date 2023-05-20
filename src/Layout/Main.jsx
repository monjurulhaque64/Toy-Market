import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;