import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'




const Details = () => {
    const toy = useLoaderData();
    const { toyPhoto, toyName, sallerName, subCategory, price, rating, quantity, description, sellerEmail } = toy;
    return (
        <div className='mt-10 mb-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toyPhoto} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div className='ms-10 mb:text-center sm:text-center lg:text-left'>
                        <h1 className="text-3xl font-bold text-purple-400">{toyName}</h1>
                        <p className="py-3 text-xl"> Saller Name: <span className='font-bold'>{sallerName}</span></p>
                        <p className="py-3 text-xl"> Saller Email: <span className='font-bold'>{sellerEmail}</span></p>
                        <p className="py-3 text-xl"> Saller Name: <span className='font-bold'>{subCategory}</span></p>
                        <p className="py-3 text-xl"> Price: <span className='font-bold'>$ {price}</span></p>
                        <p className="py-3 text-xl"> Available Quantity: <span className='font-bold'>{quantity}</span></p>
                        <p><Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        /></p>
                        <p className="py-3 text-xl"> <span className='font-bold'>Details:</span> {description}</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
