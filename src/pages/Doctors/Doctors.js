import React from 'react';
import Banner from '../../assets/banner.png';
import OurDoctors from '../../components/OurDoctors/OurDoctors';
const Doctors = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${Banner})`}}>
                <div style={{height:'250px'}} className='flex justify-center items-center'>
                    <h1 className="text-5xl text-green-600 font-semibold">Our Doctors</h1>
                </div>
            </div>
           <OurDoctors />
        </div>
    );
};

export default Doctors;