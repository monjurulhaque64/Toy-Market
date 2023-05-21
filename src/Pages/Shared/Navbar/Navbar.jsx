import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }


    const toyNavItems = <>
        <li>Home</li>
        <li>All Toys</li>
        <li>My Toys</li>
        <li>Add A Toy</li>
        <li>Blogs</li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-6 mt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content   shadow bg-base-100 rounded-box w-52 ">
                            {toyNavItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case "><img className='w-[160px]' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 font-bold">

                        {toyNavItems}

                    </ul>
                </div>
                <div className="navbar-end">
                { user ? <div className="avatar"  >
                        <div className="w-12 rounded-full tooltip" data-tip={user.displayName} >
                            <a><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" /></a>
                        </div>
                        <a onClick={handleLogOut}  className="btn ms-4 btn-outline">Log Out</a>
                    </div> :
                    <div>
                        <Link to={'/singup'}><a className="btn sing-up  ms-4 btn-outline">SIGN UP</a></Link>
                        <Link to={'/login'}><a className="btn ms-4">SIGN IN</a></Link>
                    </div>}
                    </div>
                </div>
            </div>
        
    );
};

export default Navbar;