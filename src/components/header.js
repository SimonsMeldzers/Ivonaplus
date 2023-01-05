import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/header.css'


function Header() {
  return (
    <header>
    <Navbar id='header-body' expand="lg">
        <Container>
            <Navbar.Brand href=""><Link className='router_logo' to='/'>Ivonaplus</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href=""><Link className='router_links' to='/'>Serviss</Link></Nav.Link>
                    <Nav.Link href="#">Auto noma</Nav.Link>
                    <Nav.Link href="#">Rezerves detaļas</Nav.Link>
                    <Nav.Link href="">Citas preces</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><Link className='router_links' to='/login'>Log In</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  );
}

export default Header;