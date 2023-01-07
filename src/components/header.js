import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/header.css'
import { useState } from 'react';
import { auth } from '../firebase-config';

function Header() {
    const [isAuth, setIsAuth] = useState(false);
    const signUserOut = () => {
        signOut(auth).then(async () => {
            await signOut(auth);
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = '/';
        });
    };
  return (
    <header>
    <Navbar id='header-body' expand="lg">
        <Container>
            <NavLink className='router_logo' to='/'>Ivonaplus</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='router_links' to='/'>Serviss</NavLink>
                    <NavLink className='router_links' to='/rental'>Mašīnu noma</NavLink>
                    <NavLink className='router_links' to='/'>Rezerves daļas</NavLink>
                    <NavLink className='router_links' to='/'>Citas preces</NavLink>
                </Nav>
                <Nav>
                    {!localStorage.getItem('isAuth') ? <NavLink className='router_links' to='/login'>Log In</NavLink> : <NavLink onClick={signUserOut} className='router_links' to='/'> Sign Out </NavLink>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  );
}

export default Header;