import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2'

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/toys?sellerEmail=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete this Toy!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json)
                    .then(data => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remainig = myToys.filter(myToy => myToy._id !== id)
                            setMyToys(remainig)
                        }

                    })
            }

        })

    }

    return (
        <div>
            <div className="mt-10 mb-10">

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Photo</th>
                                <th>Toy Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(myToy => <MyToyRow
                                    key={myToy._id}
                                    myToy={myToy}
                                    handleDelete={handleDelete}
                                ></MyToyRow>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyToy;