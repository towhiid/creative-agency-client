import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderMain from '../Home/HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
        <Navbar bg="transparent" variant="ltransparent">
    <Navbar.Brand className='brand' href="/"><img style= {{width:"100px", height:"40px"}} src="https://i.ibb.co/XZgxpn0/logo.png" alt=""/></Navbar.Brand>
    
    <Nav className="ml-auto">
      <Link style = {{color: '#000000'}} className = "p-5 text-primary" to = "/home">Home</Link>
      <Link style = {{color: '#000000'}} className = "p-5" href="#">Our Portfolio</Link>
      <Link style = {{color: '#000000'}} className = "p-5" href="#">Our Team</Link>
      <Link style = {{color: '#000000'}} className = "p-5" href="#">Contact Us</Link>
      <Link className = "p-5" to = "/login"><Button style = {{color: '#ffffff'}} className = "btn btn-dark">Login</Button></Link>
    </Nav>
    
  </Navbar>
  <HeaderMain></HeaderMain>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,100 100,0 100,100"/>
    </svg>
  
  </div>
    );
};

export default Header;