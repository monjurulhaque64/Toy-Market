import React from 'react';

const AllToyROw = ({ toy }) => {
    return (
        <div>
            <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="font-bold">Hart Hagerty</div>

                    </td>
                    <td>Purple</td>
                    <td>catagory</td>
                    <td>price</td>
                    <td>Quantity</td>
                    <th>
                        <button className="btn btn-outline btn-success">View Details</button>
                    </th>
                </tr>
            </tbody>
        </div>
    );
};

export default AllToyROw;