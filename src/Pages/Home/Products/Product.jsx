import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ProductCard from './ProductCard';

const Product = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [displayCount, setDisplayCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://toy-market-server-silk.vercel.app/toys?subCategory=${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleCategoryChange = (category) => {
    setActiveTab(category);
    setDisplayCount(3);
    setShowAll(false);
  };

  const handleSeeMore = () => {
    setShowAll(true);
    setDisplayCount(toys.length);
  };

 

  return (
    <div>
      <h1 className='text-center mb-10 text-5xl text-purple-400 font-bold mt-10'>Our Products!</h1>
      <Tabs>
        <TabList className='text-center font-bold text-purple-300'>
          <Tab onClick={() => handleCategoryChange('Baby Dolls')}>Baby Dolls</Tab>
          <Tab onClick={() => handleCategoryChange('Barbie')}>Barbie</Tab>
          <Tab onClick={() => handleCategoryChange('American Girl')}>American Girl</Tab>
        </TabList>



        <TabPanel>
          <div className='grid grid-cols-1 lg:gap-0 gap-6 lg:grid-cols-3 mt-10 mx-auto ms-4'>
            {toys
              .filter((toy) => toy.subCategory === 'Baby Dolls')
              .slice(0, displayCount)
              .map((toy) => (
                <ProductCard key={toy._id} toy={toy} />
              ))}
          </div>
          <div className=' w-36 mx-auto mt-6'>
            {toys.filter((toy) => toy.subCategory === 'Baby Dolls').length > 3 && !showAll && (
              <button className='btn btn-outline btn-info' onClick={handleSeeMore}>See More</button>
            )}
          </div>

        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 lg:gap-0 gap-6 lg:grid-cols-3 mt-10 mx-auto ms-4'>
            {toys
              .filter((toy) => toy.subCategory === 'Barbie')
              .slice(0, displayCount)
              .map((toy) => (
                <ProductCard key={toy._id} toy={toy} />
              ))}
          </div>
          <div  className=' w-36 mx-auto mt-6'>
            {toys.filter((toy) => toy.subCategory === 'Barbie').length > 3 && !showAll && (
              <button onClick={handleSeeMore}>See More</button>
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 lg:gap-0 gap-6 lg:grid-cols-3 mt-10 mx-auto ms-4'>
            {toys
              .filter((toy) => toy.subCategory === 'American Girl')
              .slice(0, displayCount)
              .map((toy) => (
                <ProductCard key={toy._id} toy={toy} />
              ))}
          </div>
          <div  className=' w-36 mx-auto mt-6'>
            {toys.filter((toy) => toy.subCategory === 'American Girl').length > 3 && !showAll && (
              <button onClick={handleSeeMore}>See More</button>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Product;
