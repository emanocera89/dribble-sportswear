import { Container, Col } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
    return (
        <Container fluid className="pt-4 pb-4">
            {/*<h2 className='mb-4'>Carrito</h2>*/}
            <Col xs={12} className="cart-empty text-center semibold">
                <IoCartOutline className="cart-empty-icon" />
                <p className="cart-empty-line-1">Tu carrito está vacío</p>
                <p className="cart-empty-line-2">¿No estás seguro por dónde empezar? Estos son algunos de nuestros favoritos.</p>
                <Link className="db-text-button cart-empty-cta shop-cta" to="/category/0" title="Ropa Hombre">Ropa Hombre</Link>
                <Link className="db-text-button cart-empty-cta shop-cta" to="/category/1" title="Ropa Mujer">Ropa Mujer</Link>
            </Col>
        </Container>
    )
}

export default Cart;