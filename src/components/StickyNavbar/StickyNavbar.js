import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './StickyNavbar.css';

function StickyNavbar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/b41f44aae25fe3b72f3b/categorias")
      .then((resp) => resp.json())
      .then((data) => {setCategories(data)})
  }, []);


  return (
    <Navbar expand="lg" sticky="top" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="" title="Dribble Sportswear"><Link to="/"><img src={Logo} alt="Dribble Sportswear" width="100%" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
            {categories && categories.map((category, id) => (<NavLink key={category.nombre} className="nav-link" to={`/category/${id}`}>{category.nombre}</NavLink>))}
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
