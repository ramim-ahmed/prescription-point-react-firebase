import React from 'react';
import Banner from '../../components/Banner/Banner';
import OurDoctors from '../../components/OurDoctors/OurDoctors';
import PatientServices from '../../components/PatientServices/PatientServices';
import QualityDoctors from '../../components/QualityDoctors/QualityDoctors';

const Home = () => {
    return (
        <div>
            <Banner />
            <QualityDoctors />
            <PatientServices />
            <OurDoctors />
        </div>
    );
};

export default Home;