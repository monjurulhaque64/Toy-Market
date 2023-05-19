import React from 'react';
import logo from '../../../assets/logo/logo.png'

const Subscribr = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className="bg-cover lg:h-80 h-60 bg-center py-8"
                style={{ backgroundImage: "url(https://img.pikbest.com/backgrounds/20190419/small-fresh-toy-mother-and-baby-banner-background_1889800.jpg!bwr800)" }}>
                <div className="max-w-4xl mx-auto px-4 lg:mt-20">
                <img className='w-[160px] mx-auto' src={logo} alt="" />
                    <h2 className="text-2xl lg:text-5xl text-purple-600 font-bold text-center mb-4">Subscribe to Our Toy House</h2>
                    
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:mt-10 ">
                        <input
                            type="email"
                            className="bg-white border border-gray-500 rounded py-2 px-4 mb-2 sm:mr-2 sm:w-1/2 md:w-1/3 lg:w-2/4 "
                            placeholder="Enter your email address"
                        />
                        <button className="btn btn-outline btn-info">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Subscribr;