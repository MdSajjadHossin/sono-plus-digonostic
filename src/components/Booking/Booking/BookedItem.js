import React from 'react';

const BookedItem = ({bookedItem}) => {
    const {  id, serviceName, serviceImg, description, cost } = bookedItem;
    return (
        <div>
           <div className="service">
            <img src={serviceImg} alt="" />
            <h6>Service:{id}</h6>
            <h3>{serviceName}</h3>
            <h5>Price: {cost}</h5>
            <p className="px-3">{description}</p>
        </div> 
        </div>
    );
};

export default BookedItem;