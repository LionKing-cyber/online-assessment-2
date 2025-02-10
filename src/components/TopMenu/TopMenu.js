import React from 'react';
import { Container, Navbar, Nav, ProgressBar } from 'react-bootstrap';
import './TopMenu.css';
import logo from '../../assets/images/logo.png'

const TopMenu = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
        {/* <Nav className="mx-auto">
          <span className="navbar-text">Your Quiz Progress</span>
          <ProgressBar now={50} label={`Step 1 of 5`} />
        </Nav> */}
      </Container>
    </Navbar>
  );
};

export default TopMenu;
