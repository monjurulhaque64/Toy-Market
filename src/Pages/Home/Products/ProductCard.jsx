import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const ProductCard = ({ toy }) => {

    const {toyPhoto , toyName , price, rating, _id } = toy;



    // ******** I apply my details Button with onClick function but my full site not show any data. the error is  "Uncaught SyntaxError: ambiguous indirect export: useHistory". apply meny process but not fixed**************

    

    // const {user} = useContext(AuthContext);
    // const location = useLocation();
    // const handleViewDetails = () =>{
    //     if(!user){
    //         Swal.fire({
    //             icon: 'error',
    //             text: 'You have to log in first to view details',
    //             onClose: () => {
    //               location.push('/login');
    //             }
    //           });

    //     }
    //     else{
    //         location.push(`/toys/${toy._id}`);
    //       }
    // }

   
  
    return (
        
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
                <figure><img className='w-9/12' src={toyPhoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{toyName}</h2>
                    <p className='text-xl'>Price: {price}$</p>
                    <div className="card-actions justify-between">
                        <p><Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        /></p>
                        <Link to={`/details/${_id}`}><button  className="btn btn-outline btn-info">View Details</button></Link>
                    </div>
                </div>
            </div>
        
    );
};

export default ProductCard;