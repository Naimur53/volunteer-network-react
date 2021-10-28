import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const MainNav = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} activeClassName="text-danger" to='/home'>Home</Nav.Link>
                        <Nav.Link as={NavLink} activeClassName="text-danger" to='/events'>Events</Nav.Link>
                        <Nav.Link as={NavLink} activeClassName="text-danger" to='/manageuser'>Manage User</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user.displayName && <span className='text-white text-center my-auto me-4'>{user.displayName}</span>
                        }
                        {


                            user.displayName ? <button className='btn btn-danger rounded-0' onClick={handleSignOut}>LogOut</button> : <Nav.Link as={NavLink} to='/login'> Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;