import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/banner/banner.jpg';

const Banner = () => {
  return (
    <div>
      <div
        className="banner bg-cover bg-center h-64 md:h-80 lg:h-96 rounded-lg"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="flex flex-col justify-center items-center h-full text-white text-center px-4 md:px-8">
          <h1 className="text-2xl lg:text-4xl text-purple-400 font-bold mb-4">
            Playful Wonders: Discover Joyful Delights at Our Baby Toy House!
          </h1>
          <p className="text-base md:text-lg text-gray-500 lg:text-xl mb-6">
            Toys that Spark Smiles. Delight your little ones with our charming collection of baby toys.
          </p>
          <div className="flex space-x-4">
            <Link to="/alltoy">
              <button className="btn btn-outline btn-info">View Collections</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
