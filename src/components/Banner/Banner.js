import React from 'react';
import banner from '../../assets/banner.png';
const Banner = () => {
    
    return (
        <div style={{backgroundImage:`url(${banner})`}}>
            <div style={{height:'500px'}} className='container mx-auto flex justify-center items-center md:max-w-lg'>
              <div className='space-y-3 text-center md:text-left px-4'>
                  <h1 className='text-5xl font-extrabold text-green-800'>The Greatest</h1>
                  <h1 className='text-5xl font-extrabold text-blue-800'>Health Is Wealth</h1>
                  <p className="text-xm">
                  As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely.
                  </p>
                  <div className='space-x-3'> 
                      <button className='btn-regular'>GET DOCTOR</button>
                      <button className=' border-2 text-black border-blue-800 px-6 py-2 rounded-md'  >CONTACT NOW</button>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;