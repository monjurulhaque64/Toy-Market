import React from 'react';
import { FaGoogle } from "react-icons/fa";
import img from '../../assets/login/Cute-Aesthetic-Wallpaper-removebg-preview.png'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/illustration-baby-background-design-3d-graphic-style-blue-background_62298-681.jpg)" }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-[800px] mr-6' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center text-emerald-400">Sing In</h1>
                            <form>
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
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-accent ">Sing in</button>
                                </div>
                                <label className="label">
                                    <p className="label-text-alt link link-hover">New to Toy House? <Link className='text-emerald-400 font-bold'>Sing Up</Link></p>
                                </label>


                            </form>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-info gap-1 "><FaGoogle></FaGoogle> GOOGLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;