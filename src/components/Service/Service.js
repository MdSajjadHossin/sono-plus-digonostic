import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {  id, serviceImg, serviceName } = service;
    return (
        <div className="service">
            <img src={serviceImg} alt="" />
            <h3>{serviceName}</h3>
            <Link to={`/booking/${id}`}><button className="btn btn-warning">Book This Service</button></Link>
        </div>
    );
};

export default Service;