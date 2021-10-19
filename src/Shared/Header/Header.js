import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Image/sonoplus-logo-removebg-preview.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/usefirebase';

const Header = () => {
    // const {} = useAuth
    const {user, logout} = useAuth()
    return (
            <>
            <Navbar  sticky="top" collapseOnSelect expand='lg'>
                <Container>
                    <Navbar.Brand href="#home"><img id="logo-img" src={logo} alt="" /> Sono Plus Digonostic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#news">News & Articals</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about">About US</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login {user.displayName}</Nav.Link>
                    {user?.email && <button onClick={logout}>Log Out</button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;