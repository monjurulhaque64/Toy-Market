import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {

    const toy = useLoaderData();
    const {_id, toyName, price, quantity, description} = toy;
    const handleUpdateToy = event =>{
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;



        const updateToy = {
            toyName,  price, quantity, description
        }
        console.log(updateToy)

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Updated!',
                    text: 'Toy Update Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })

    }
    return (
        <div>
            <div>

                <div className="hero min-h-screen bg-base-200 mt-10 mb-10" style={{ backgroundImage: "url(https://www.hdwallpapers.in/download/brown_teddy_bear_on_green_grass_hd_teddy_bear-1920x1080.jpg)" }}>
                    <form onSubmit={handleUpdateToy}>
                        <div className="hero-content " >
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
                                <div className="card-body">
                                    <h1 className="text-5xl font-bold text-center">Update Toy</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Toy Name"
                                            className="input input-bordered" name='toyName' 
                                            defaultValue={toyName}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Price"
                                            className="input input-bordered"
                                            name='price'
                                            defaultValue={price}
                                        />
                                    </div>
                                    
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter Available Quantity"
                                            className="input input-bordered"
                                            name='quantity'
                                            defaultValue={quantity}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Description"
                                            className="input input-bordered" name='description' required
                                            defaultValue={description}
                                        />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-outline">Update Toy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;