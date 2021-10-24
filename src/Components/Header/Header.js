import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Share/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();
    const LogInBtn = () => {
        history.push('./login')
    }

    const logOutbtn = () => {
        history.push('./signup')
    }
 
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container className='navbar'>
                <Navbar.Brand as={Link} to="/">Power Gym</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto navbar">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    {/* {
                        user.email && <p className='userName'>Welcome {user.displayName}</p>
                    } */}

                    {
                        user.email ? <p className='userName'>Welcome {user.displayName}</p> :
                            <button className='Button' onClick={LogInBtn} >Log In</button>
                    }

                    {
                        user.email ? <button className='Button' onClick={logOut}>Log Out</button>:
                            <button className='Button' onClick={logOutbtn}>Sign Up</button>

                    }

                </Nav>
                    <Navbar.Text>
                        {/* Signed in as: <a href="#login">Mark Otto</a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default Header;