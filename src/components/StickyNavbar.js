import './StickyNavbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Logo from '../assets/logo.svg';

function StickyNavbar() {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" title="Dribble Sportswear"><img src={Logo} alt="Dribble Sportswear" width="160" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
            <Nav.Link href="#home">Hombre</Nav.Link>
            <Nav.Link href="#features">Mujer</Nav.Link>
            <Nav.Link href="#pricing">Camisetas</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <Nav.Link href="#pricing">Calzado</Nav.Link>
            <Nav.Link href="#pricing">Retro</Nav.Link>
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
