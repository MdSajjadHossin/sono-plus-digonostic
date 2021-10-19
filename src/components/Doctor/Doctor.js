import React, { useEffect, useState } from 'react';
import ShowDoctor from './ShowDoctor';

const Doctor = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(()=>{
        const url = `/doctor.JSON`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDoctor(data));
    }, [])
    return (
        <div>
            <h1>Our Doctors</h1>
            <div  className="service-container">
            {
                doctor.map(doctor =><ShowDoctor key={doctor.id} doctor={doctor}></ShowDoctor>)
            }
        </div>
        </div>
    );
};

export default Doctor;