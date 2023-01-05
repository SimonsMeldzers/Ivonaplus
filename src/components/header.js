import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/header.css'


function Header() {
  return (
    <header>
    <Navbar id='header-body' expand="lg">
        <Container>
            <NavLink className='router_logo' to='/'>Ivonaplus</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='router_links' to='/'>Serviss</NavLink>
                    <NavLink className='router_links' to='/'>Mašīnu noma</NavLink>
                    <NavLink className='router_links' to='/'>Rezerves daļas</NavLink>
                    <NavLink className='router_links' to='/'>Citas preces</NavLink>
                </Nav>
                <Nav>
                    <NavLink className='router_links' to='/login'>Log In</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  );
}

export default Header;