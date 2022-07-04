import './StickyNavbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function StickyNavbar() {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="" title="Dribble Sportswear"><Link to="/"><img src={Logo} alt="Dribble Sportswear" width="100%" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
            <NavLink className="nav-link" to="category/0">Hombre</NavLink>
            <NavLink className="nav-link" to="category/1">Mujer</NavLink>
            <NavLink className="nav-link" to="category/2">Calzado</NavLink>
            <NavLink className="nav-link" to="category/3">Camisetas</NavLink>
            <NavLink className="nav-link" to="category/4">Retro</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
