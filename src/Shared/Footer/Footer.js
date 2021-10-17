import React from 'react';
import logo from '../../Image/sonoplus-logo-removebg-preview.png';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt}/>
    const email = <FontAwesomeIcon icon={faEnvelope}/>
    const phone = <FontAwesomeIcon icon={faPhoneSquareAlt}/>
    return (
        <>
        <div className="footer row">
        <div className="col-lg-3 col-md-6 col-12">
            <img src={logo} alt="" />
            <p>We Provide The Best Care</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold fs-5">Company</p>
            <p>About Us</p>
            <p>Vision & Mission</p>
            <p>Leadership</p>
            <p>Careers</p>
            <p>News & Article</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold fs-5">Support</p>
            <p>Help Center</p>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Ticket</p>
            <p>Get an Appointment</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold fs-5">Contact Info</p>
            <p>{location} Magura Collage Road</p>
            <p>{email} sonoplusdigo@gmail.com</p>
            <p>{phone} + 0081948983498</p>
        </div>
        </div>
        </>
    );
};

export default Footer;