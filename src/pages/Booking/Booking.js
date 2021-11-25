import React, { useContext } from 'react';
import { BookingContext } from '../../App';
import Book from './Book';

const Booking = () => {
    const [booking] = useContext(BookingContext);
    return (
        <div style={{height:'538px'}} className='container mx-auto my-32'>
            <div>
                <h1 className="text-5xl text-center my-4">Booking</h1>
            </div>
            <div>
                {
                    booking.map( book => <Book key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Booking;