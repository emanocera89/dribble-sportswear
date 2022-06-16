import './StickyNavbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.svg'

function StickyNavbar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Dribble Sportswear" width="160"/></Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link href="#home">Hombre</Nav.Link>
          <Nav.Link href="#features">Mujer</Nav.Link>
          <Nav.Link href="#pricing">Camisetas</Nav.Link>
          <Nav.Link href="#pricing">Accesorios</Nav.Link>
          <Nav.Link href="#pricing">Calzado</Nav.Link>
          <Nav.Link href="#pricing">Retro</Nav.Link>
          <Nav.Link href="#pricing">Ofertas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
