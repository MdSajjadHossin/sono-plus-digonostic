import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import img1 from '../../Image/slide-1.jpg';
import img2 from '../../Image/slide-2.jpg';
import img3 from '../../Image/slide-3.jpg';
import emergency from '../../Image/Emergency.jpg';
import dental from '../../Image/dentel.jpg';
import bady from '../../Image/pediatration.jpg';
import surgery from '../../Image/surgone.jpg';
import covid from '../../Image/covid-19.jpg';
import test from '../../Image/test.jpg';

const Home = () => {
    return (
        <>
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Your Trusted Helping Hand</h3>
                <p>We Offer A Wide Range Of Medical Services</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Keep Faith In Almighty</h3>
                <p>Your Care Is Our Responsibality</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>We Cure Bacause We Care</h3>
                <p>Alwayse Keep Faith In Almighty. We Are Just Healoing Hand</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        {/* service section */}
        <div className="service-container">
            <h1>We Provide</h1>
            <div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={emergency} alt="" />
                    <br />
                    <p>24 Houre Emergency Service</p>
                    <button className="btn btn-warning">Book Emergency</button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={dental} alt="" />
                    <br />
                    <p>Specialised Dental Section</p>
                    <button className="btn btn-warning">Book Dental Service</button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={bady} alt="" />
                    <br />
                    <p>Special Child Care</p>
                    <button className="btn btn-warning">Book Emergency</button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={surgery} alt="" />
                    <br />
                    <p>We Have Highly Qualified Surgery Section</p>
                    <button className="btn btn-warning">Book Surgery Section </button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={covid} alt="" />
                    <br />
                    <p>We Have Highly Protected Covid Zone</p>
                    <button className="btn btn-warning">Book Covid Zone</button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={test} alt="" />
                    <br />
                    <p>We Provide All Medical Test You Need</p>
                    <button className="btn btn-warning">Book Any Medical Test</button>
                </div>
            </div>
            </div> 
        </div>
        {/* Doctor Section */}
        <div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
        </>
    );
};

export default Home;