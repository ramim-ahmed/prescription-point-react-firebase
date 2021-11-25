import React from 'react';

const Doctor = ({doctor}) => {
    const {name, title, img,} = doctor
    return (
        <div className='border-2 flex flex-col justify-center'>
           <img src={img} alt="" />
           <div className='mt-3 text-center'>
               <h1 className="text-2xl font-bold text-blue-700">{name}</h1>
               <h2 className=" text-lg font-semibold">{title}</h2>
               <div className='flex justify-center'>
                    <button className='font-semibold px-7 py-2 flex hover:text-green-600  transition-all'>LERN MORE
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                 </div>
           </div>
        </div>
    );
};

export default Doctor;