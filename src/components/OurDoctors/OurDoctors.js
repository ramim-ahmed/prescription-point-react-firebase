import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('./doctors.json')
        .then( res => res.json())
        .then( data => {
            setDoctors(data)
        })
    }, [])
    return (
        <div className='container mx-auto px-4 my-32'>
            <div className=' space-y-6 border-indigo-700 mb-8'>
                <h1 className="text-5xl text-center font-extrabold">Our High Qualified <span className='text-green-600'>Doctors</span></h1>
                <p className="text-xm w-3/4 mx-auto text-center ">
                  <div>
                  As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely
                  </div>
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    doctors.map( doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default OurDoctors;