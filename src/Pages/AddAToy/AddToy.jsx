import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const AddToy = () => {

    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const toyPhoto = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const sallerName = form.sallerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        console.log(toyName, toyPhoto, sallerName, sellerEmail, subCategory, price, rating, quantity, description)


    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 mt-10 mb-10" style={{ backgroundImage: "url(https://thumbs.dreamstime.com/b/table-top-view-decoration-kid-toys-develop-background-concept-table-top-view-decoration-kid-toys-develop-background-158022023.jpg)" }}>
                <form onSubmit={handleAddToy}>
                    <div className="hero-content " >
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
                            <div className="card-body">
                                <h1 className="text-5xl font-bold text-center">Add A Toy</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Picture URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Picture URL"
                                        className="input input-bordered" name='toyPhoto' required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Toy Name"
                                        className="input input-bordered" name='toyName' required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Seller Name"
                                        className="input input-bordered"
                                        name='sallerName' required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Seller Email"
                                        className="input input-bordered"
                                        name='sellerEmail'
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <select name="subCategory" className="input input-bordered">
                                        <option value="" disabled>Select Sub-category</option>
                                        <option value="Math Toys">Math Toys</option>
                                        <option value="Language Toys">Language Toys</option>
                                        <option value="Science Toys">Science Toys</option>
                                    </select>
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
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter Rating"
                                        className="input input-bordered"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        name='rating'
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
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Add Toy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddToy;