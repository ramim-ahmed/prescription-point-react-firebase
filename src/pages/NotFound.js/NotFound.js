import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height:'538px'}} className='flex flex-col justify-center items-center'>
            <h1 className='text-6xl text-red-600'>Page Not Found</h1>
            <br />
            <Link to='/home'>
                <p className='text-xl text-green-600'>Back</p>
            </Link>
        </div>
    );
};

export default NotFound;