import React from 'react';
import { Link } from 'react-router-dom';


const MyToyRow = ({myToy, handleDelete}) => {
    const { _id, toyPhoto, toyName, subCategory, price, quantity } = myToy;

    
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
            
            <td className='text-center'>{subCategory}</td>
            <td className='text-center'>$ {price}</td>
            <td className='text-center'>{quantity}</td>
            <th>
                <Link to={`/update/${_id}`} ><button className="btn btn-outline btn-info">Update</button></Link>
            </th>
            <th>
                <Link><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-warning">Delete</button></Link>
            </th>
        </tr>
    );
};

export default MyToyRow;