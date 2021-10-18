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
import doctor from '../../Image/doctor-smilly.jpg';
import bdCovidNews from '../../Image/covid-news-bd.jpg';
import healthNobel from '../../Image/health-nodel.jpg';
import medigadget from '../../Image/medigadget.png';
import aboutUs from '../../Image/medical-services.PNG';

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
                <h3 id="carousel-h3">Your Trusted Helping Hand</h3>
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
                <h3 id="carousel-h3">Keep Faith In Almighty</h3>
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
                <h3 id="carousel-h3">We Cure Bacause We Care</h3>
                <p>Alwayse Keep Faith In Almighty. We Are Just Healoing Hand</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        {/* service section */}
        <div className="service-container">
            <h1 className="m-4">We Provide</h1>
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
        <div className="doctor-container">
            <h2 className="m-4">About Our Doctors</h2>
            <div className="row">
            <div className= 'col-lg-6 col-md-6 col-12'>
                <img id="doctor" src={doctor} alt="" />
            </div>
            <div className= 'col-lg-6 col-md-6 col-12 doctor-text'>
                <h3>We Have</h3><br />
                <h4>The Best Doctors</h4>
                <p>We have specific type of doctor for almost every major system located in the human body. Regardless of specialty, doctors face the challenge of diagnosing and treating human disease, ailments, injuries, pain, or other conditions. This is done by listening to the patient, understanding the problem, and then using their scientific expertise to know how best to treat the ailment or concern.</p>
            </div>
            </div>
        </div>
        {/* news and article section */}
        <div>
            <h2 className="m-4">News & Articals</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={bdCovidNews} alt="" />
                    <br />
                    <p className="fw-bold">Covid-19 Bangladesh</p>
                    <p className="shadow-lg p-3 mb-5 bg-body rounded">Bangladesh reported 16 more deaths from coronavirus in the last 24 hours, climbing the national toll to 27,768 across the country so far.Besides, some 314 new cases were reported during the same period. With this, the total number of infections stood at 15,65,488 in the country.A press release of the Directorate General of Health Services (DGHS) revealed the development on Sunday (October 17).</p>
                    <button className="btn btn-warning m-2">learn More</button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={healthNobel} alt="" />
                    <br />
                    <p className="fw-bold">Nobel Prise on Health</p>
                    <p className="shadow-lg p-3 mb-5 bg-body rounded">Our ability to sense heat, cold and touch is essential for survival and underpins our interaction with the world around us. In our daily lives we take these sensations for granted, but how are nerve impulses initiated so that temperature and pressure can be perceived? This question has been solved by this year’s Nobel Prize laureates.David Julius utilized capsaicin, a pungent compound from chili peppers that induces a burning sensation, to identify a sensor in the nerve endings of the skin that responds to heat. Ardem Patapoutian used pressure-sensitive cells to discover a novel class of sensors that respond to mechanical stimuli in the skin and internal organs. These breakthrough discoveries launched intense research activities leading to a rapid increase in our understanding of how our nervous system senses heat, cold, and mechanical stimuli. The laureates identified critical missing links in our understanding of the complex interplay between our senses and the environment.</p>
                    <button className="btn btn-warning m-2">Learn More</button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 service">
                    <img id="service-img" src={medigadget} alt="" />
                    <br />
                    <p className="fw-bold">Aidia Smart Bottle</p>
                    <p className="shadow-lg p-3 mb-5 bg-body rounded">AdhereTech, a medtech company based in New York City, has developed the Aidia Smart Bottle (previously known as the Smart Pill Bottle), a connected pill bottle that helps to increase medication compliance using lights, audio alerts, and text message reminders. The bottle will remind patients to take their medication and remind them if they have missed a dose. Poor medication compliance can be the decider between disease management and disease progression. During the COVID-19 pandemic many patients with chronic health conditions were not in regular contact with their physicians and</p>
                    <button className="btn btn-warning m-2">Learn More</button>
                </div>
            </div>
        </div>
        {/* About US */}
        <div>
            <h2 className="m-4">About Us</h2>
            <img className="w-100" src={aboutUs} alt="" />
        </div>
        </>
    );
};

export default Home;