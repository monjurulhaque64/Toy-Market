import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen container mx-auto"
      style={{
        backgroundImage:
          "url(https://c8.alamy.com/zooms/6/46b12cbfe63f49308859c7204b1897d4/2g9e7xm.jpg)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh'
      }}
    >
      <Link to={'/'}><button className="btn btn-warning">Back To Home</button></Link>
    </div>
  );
};

export default PageNotFound;
