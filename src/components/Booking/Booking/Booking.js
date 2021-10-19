import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookedItem from './BookedItem';

const Booking = () => {
    const {serviceId} = useParams();
    const [booking, setBooking] = useState([])
    useEffect(()=>{
        const url = `/services.JSON`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data));
    }, [])
    return (
        <div>
            <h2>You Have Booked: {serviceId}</h2>
            <div className="bg-danger text-light fw-bold">
            <p>For Some Technical Problem We Can Not Show Individual Booking Item Please Find Below Accroding To Service Id</p>
            <small>Sorry For The Inconvenience!!!!!</small>
            </div>
            <div className="service-container">
                {
                    booking.map(booked =><BookedItem key={booked.id}
                        bookedItem = {booked}
                        >
                    </BookedItem>
                        
                    )
                    
                }
            </div>
            
        </div>
    );
};

export default Booking;