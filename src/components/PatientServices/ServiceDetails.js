import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../App';
// import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const {id} = useParams();
     const [services, handleBooking] = useContext(ServiceContext);
    const details = services.find( d => d.id === id);
   const {img, title, description, price, service} = details
    return (
        <div className='container mx-auto px-4 my-32 md:flex'>
            <img src={details.img} alt="" />
            <div className='ml-8 space-y-3'>
                <h1 className="text-3xl font-semibold">{title}</h1>
                <h2 className="text-2xl">{description}</h2>
                <h2 className="text-2xl">{service}</h2>
                <h2 className="text-2xl">Price: ${price}</h2>
                <div>
                    <button onClick={ () => handleBooking(details)} className="btn-regular">BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;