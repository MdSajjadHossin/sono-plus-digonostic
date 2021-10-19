import React from 'react';

const ShowDoctor = ({doctor}) => {
    const {img, name, consultant, Visit} = doctor;
    return (
        <div className="service bg-light">
            <img className="shadow" src={img} alt="" />
            <div className=" border border-warning border-2 mx-5 my- 2 bg-secondary text-light rounded">
            <h5>Name: {name}</h5>
            <h5 style={{overflow:'hidden'}}>Consultant: {consultant}</h5>
            <p className="fw-bold">Visit: {Visit}</p>
            </div>
        </div>
    );
};

export default ShowDoctor;