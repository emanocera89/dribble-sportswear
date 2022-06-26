import './CartWidget.css';
import Icon from "../assets/basket.svg";
import { Badge } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";

function CartWidget() {
    return (
        <button className="d-flex cart-container" title="El carrito está vacío">
            <IoCartOutline />
            <Badge className="cart-counter" pill>
                0
            </Badge>
        </button>
    );
}

export default CartWidget;