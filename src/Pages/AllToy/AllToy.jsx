import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyROw from './AllToyROw';

const AllToy = () => {
    const toys = useLoaderData();
    return (
        <div className='mt-10 mb-10'>
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
                        {
                            toys.map(toy => <AllToyROw
                                key={toy._id}
                                toy={toy}
                            ></AllToyROw>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToy;