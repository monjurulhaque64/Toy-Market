import React from 'react';

const Partners = () => {
    return (
        <div className='mt-20 mb-20 mx-auto  '>
            <h1 className='text-center mb-2 text-5xl text-purple-400 font-bold'>Our Partners!</h1>
            <h1 className='text-center mb-10 text-xl text-gray-500 font-bold'>- Only the best products -</h1>
            

            <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-4 '>
                <img className='mx-auto' src="https://cdn.shopify.com/s/files/1/0551/8953/6821/files/partners-1_1.png?v=1643695763" alt="" />
                <img className='mx-auto' src="https://cdn.shopify.com/s/files/1/0551/8953/6821/files/partners-2_1.png?v=1643695781" alt="" />
                <img className='mx-auto' src="https://cdn.shopify.com/s/files/1/0551/8953/6821/files/partners-3_1.png?v=1643695798" alt="" />
                <img className='mx-auto' src="https://cdn.shopify.com/s/files/1/0551/8953/6821/files/partners-4_1.png?v=1643695812" alt="" />
                <img className='mx-auto' src="https://cdn.shopify.com/s/files/1/0551/8953/6821/files/partners-5_1.png?v=1643695831" alt="" />
                <img className='mx-auto' src="https://cdn.shopify.com/s/files/1/0551/8953/6821/files/partners-6_1.png?v=1643695846" alt="" />
            </div>
        </div>
    );
};

export default Partners;