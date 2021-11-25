import React from 'react';
import Banner from '../../assets/banner.png';
const About = () => {
    return (
        <div style={{backgroundImage:`url(${Banner})`}}>
           <div style={{height:'539px'}} className='flex justify-center items-center'>
            <h1 className="text-5xl text-green-600 font-semibold">About Comming Soon.........</h1>
           </div>
        </div>
    );
};

export default About;