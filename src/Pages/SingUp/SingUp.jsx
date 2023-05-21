import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SingUp = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState();
    

    const handleSingUp = event => {
        event.preventDefault();
        const form =  event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        console.log(displayName, email, photoURL, password)
        setError('');

        createUser(email, password, photoURL, displayName)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser)
            
            form.reset();
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)

        })

    }
    return (
        <div>
             <div>

            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://e1.pxfuel.com/desktop-wallpaper/392/123/desktop-wallpaper-cute-toys-kawaii-bear-laptop.jpg)" }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center text-emerald-400">Sing Up</h1>
                            <form onSubmit={handleSingUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" required name='name' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" required name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" className="input input-bordered" required name='photo' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered" required name='password' />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-accent ">Sing Up</button>
                                </div>
                                <label className="label">
                                    <p className="label-text-alt link link-hover">Already Member Toy House? <Link to={'/login'} className='text-emerald-400 font-bold'>Sing In</Link></p>
                                </label>


                            </form>
                            <p className='text-warning text-center'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default SingUp;