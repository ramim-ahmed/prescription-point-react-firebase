import React from 'react';
import Banner from '../../assets/banner.png';
import PatientServices from '../../components/PatientServices/PatientServices';
const Services = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${Banner})`}}>
                <div style={{height:'250px'}} className='flex justify-center items-center'>
                    <h1 className="text-5xl text-green-600 font-semibold">Our Services</h1>
                </div>
            </div>
            <PatientServices />
        </div>
    );
};

export default Services;