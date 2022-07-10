import { useContext } from "react";
import { Container, Col } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import "./Cart.css";

function Cart() {

    const cartCtx = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        cartCtx.removeItem(itemId);
    }

    const handleClearCart = () => {
        cartCtx.clear();
    }

    return (
        <Container fluid className="pt-4 pb-4">
            {cartCtx.cartItems.length <= 0 ?
                <Col xs={12} className="cart-empty text-center semibold">
                    <IoCartOutline className="cart-empty-icon" />
                    <p className="cart-empty-line-1">Tu carrito está vacío</p>
                    <p className="cart-empty-line-2">¿No estás seguro por dónde empezar? Estos son algunos de nuestros favoritos.</p>
                    <Link className="db-text-button cart-empty-cta shop-cta" to="/category/0" title="Ropa Hombre">Ropa Hombre</Link>
                    <Link className="db-text-button cart-empty-cta shop-cta" to="/category/1" title="Ropa Mujer">Ropa Mujer</Link>
                </Col>
                :
                <div>
                    <h2 className='mb-4'>Carrito</h2>
                    <button onClick={handleClearCart} className="mb-5">Borrar todo</button>
                    <ul>
                        {cartCtx.cartItems.map((i) => (
                            <li style={{marginBottom: 20}}>
                                <span style={{display: 'block'}}>Nombre: {i.item.nombre}</span>
                                <span style={{display: 'block'}}>Cantidad: {i.quantity}</span>
                                <span style={{display: 'block'}}>Total: ${i.price}</span>
                                <button onClick={e => handleRemoveItem(i.itemId)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </Container>
    )
}

export default Cart;