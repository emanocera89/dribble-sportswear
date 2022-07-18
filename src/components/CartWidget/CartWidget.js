import './CartWidget.css';
import { Badge } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {

    const cartCtx = useContext(CartContext);

    return (
        cartCtx.totalQuantity > 0 &&
        <Link to="/cart" className="d-flex cart-container" title={cartCtx.totalQuantity <= 0 ? `El carrito está vacío` : `Hay ${cartCtx.totalQuantity} item/s en el carrito`}>
            <IoCartOutline />
            <Badge className="cart-counter" pill>
                {cartCtx.totalQuantity}
            </Badge>
        </Link>
    );
}

export default CartWidget;