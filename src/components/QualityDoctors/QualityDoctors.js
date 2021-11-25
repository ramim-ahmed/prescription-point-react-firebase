import React from 'react';
import doctorImg from '../../assets/doctors.png';
const QualityDoctors = () => {
    return (
        <div className='container mx-auto flex justify-between px-4 py-4 my-32'>
            <div className='w-2/5'>
                <img src={doctorImg} alt="" />
            </div>
            <div className='w-3/5 flex flex-col justify-center'>
                <div className='space-y-6'>
                    <h1 className="text-5xl font-extrabold font-sans">
                        Quality Helthcare Starts With <span className='text-green-700'>Quality Doctors</span>
                    </h1>
                    <p className="text-xm">
                    As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely. Conversely, a bad diagnosis usually means a bad outcome, no matter how skilled the physician.
                    </p>
                    <button className="btn-regular">
                        CONTACT NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QualityDoctors;