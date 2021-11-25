import React from 'react';
import useServices from '../../hooks/useServices';
import Service from './Service';

const PatientServices = () => {
      const [services] = useServices()
    return (
        <div className='container mx-auto my-32 px-4'>
            <div className=' space-y-6 border-indigo-700'>
                <h1 className="text-5xl text-center font-extrabold">Special Service For Patients</h1>
                <p className="text-xm w-3/4 mx-auto text-center ">
                  <div>
                  As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely
                  </div>
                </p>
            </div>
            <div className='mt-8 grid-cols-1 lg:grid-cols-4 grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
                {
                  services.map( service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default PatientServices;