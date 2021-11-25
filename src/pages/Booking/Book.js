import React from 'react';

const Book = ({book}) => {
    const {title, description, price} = book
    return (
        <div className=" border-2 p-6 mt-4">
           <h1 className="text-3xl font-bold">{title}</h1>
           <h2 className="text-lg">{description}</h2>
           <h2>Price:<strong>${price}</strong></h2>
        </div>
    );
};

export default Book;