import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './StickyNavbar.css';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function StickyNavbar() {

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    setCategories([]);
    const db = getFirestore();
    const categoriesCollection = collection(db, "categorias");
    getDocs(categoriesCollection).then((snapshot) => {
      if (snapshot.docs.length > 0) {
        let catArr = snapshot.docs.map((doc) => doc.data());
        setCategories(catArr);
      }
    })
  }

  useEffect(() => {
      getCategories();
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
