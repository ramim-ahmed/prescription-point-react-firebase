import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = ({service}) => {
    const {id, img, title, description} = service;
    const history = useHistory();
    const handleServiceDetails = (id) => {
           history.push(`/service/${id}`)
    }
    return (
        <div className='flex flex-col justify-center border-2'>
            <img className='w-full' src={img} alt="" />
            <div className='text-center mt-5 p-3'>
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-xm mt-2">{description}</p>
                 <div className='flex justify-center'>
                    <button onClick={ () => handleServiceDetails(id)} className='font-semibold px-7 py-2 flex hover:text-green-600  transition-all'>LERN MORE
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default Service;