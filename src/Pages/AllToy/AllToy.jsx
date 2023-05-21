import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyROw from './AllToyROw';

const AllToy = () => {
  const allToys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleToys, setVisibleToys] = useState(allToys.slice(0, 20));

  const handleSearch = event => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredToys = allToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(query.toLowerCase())
    );
    setVisibleToys(filteredToys);
  };

  const handleSeeMore = () => {
    setVisibleToys(allToys);
  };

  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Toy Name"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border rounded-md"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {visibleToys.map((toy) => (
              <AllToyROw key={toy._id} toy={toy}></AllToyROw>
            ))}
          </tbody>
        </table>
      </div>
      {visibleToys.length < allToys.length && (
        <div className="flex justify-center mt-4">
          <button className="btn btn-outline btn-success" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToy;
