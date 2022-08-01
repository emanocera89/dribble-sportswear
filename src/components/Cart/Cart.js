import { useContext } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import "./Cart.css";

function Cart() {

    const cartCtx = useContext(CartContext);

    const handleRemoveItem = (id) => {
        cartCtx.removeItem(id);
    }

    const handleClearCart = () => {
        cartCtx.clear();
    }

    return (
        <Container fluid className="pb-4 cart">
            {cartCtx.cartItems.length <= 0 ?
                <Col xs={12} className="cart-empty text-center semibold">
                    <IoCartOutline className="cart-empty-icon" />
                    <p className="cart-empty-line-1">Tu carrito está vacío</p>
                    <p className="cart-empty-line-2">¿No estás seguro por dónde empezar? Estos son algunos de nuestros favoritos.</p>
                    <Link className="db-text-button cart-empty-cta shop-cta" to="/category/0" title="Ropa Hombre">Hombre</Link>
                    <Link className="db-text-button cart-empty-cta shop-cta" to="/category/1" title="Ropa Mujer">Mujer</Link>
                </Col>
                :
                <div>
                    <Row>
                        <Col xs={8}>
                            <div className="d-flex cart-header">
                                <h2>Carrito</h2>
                                <button className="clear-cart" onClick={handleClearCart}>Vaciar Carrito</button>
                            </div>

                            <ul className="cart-item-list">
                                {cartCtx.cartItems.map((i) => (
                                    <CartItem item={i} onDelete={handleRemoveItem} />
                                ))}
                            </ul>
                        </Col>
                        <Col xs={4}>
                            <CartTotal total={cartCtx.totalPrice} quantity={cartCtx.totalQuantity} />
                        </Col>
                    </Row>
                </div>
            }
        </Container>
    )
}

export default Cart;