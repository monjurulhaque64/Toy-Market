import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import img from '../../assets/login/Cute-Aesthetic-Wallpaper-removebg-preview.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SinginIMG from '../../assets/login/singin.jpg';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {singIn, singInGoogle} = useContext(AuthContext)
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('');

        singIn(email, password)
        .then(result => {
            const loginUser = result.user;
            console.log(loginUser)
            navigate(from, {replace: true})
            form.reset();
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)

        })

    }
    const handleGoogle = () =>{
        const provider = new GoogleAuthProvider();
        singInGoogle(provider)
        .then(result => {
            const logedWithGoogle = result;
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })

    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${SinginIMG})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-[800px] mr-6' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center text-emerald-400">Sing In</h1>
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" required name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered" required name='password' />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <p className='text-warning text-center'>{error}</p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-accent ">Sing in</button>
                                </div>
                                <label className="label">
                                    <p className="label-text-alt link link-hover">New to Toy House? <Link to={'/singup'} className='text-emerald-400 font-bold'>Sing Up</Link></p>
                                </label>


                            </form>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogle} className="btn btn-outline btn-info gap-1 "><FaGoogle></FaGoogle> GOOGLE</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default Login;