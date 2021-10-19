import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Image/sonoplus-logo-removebg-preview.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    // const {} = useAuth
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
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    {/* {users?.email?
                        <Button onClick={logOut} variant="light">Logout</Button>:
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{users?.displayName}</a>
                    </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;