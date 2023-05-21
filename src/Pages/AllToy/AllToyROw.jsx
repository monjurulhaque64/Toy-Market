import React from 'react';
import { Link } from 'react-router-dom';

const AllToyROw = ({ toy }) => {
    const { _id, toyPhoto, toyName, sallerName, subCategory, price , quantity } = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={toyPhoto} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold text-center">{toyName}</div>

            </td>
            <td className='text-center'>{sallerName}</td>
            <td className='text-center'>{subCategory}</td>
            <td className='text-center'>$ {price}</td>
            <td className='text-center'>{quantity}</td>
            <th>
                <Link to={`/details/${_id}`} ><button className="btn btn-outline btn-success">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToyROw;