import './CartWidget.css';
import Icon from "../assets/basket.svg"

function CartWidget() {
    return (
        <button className="d-flex cart-container" title="La canasta está vacía">
            <img src={Icon} width="28" height="28" />
            <span className="cart-counter ms-2">(0)</span>
        </button>
    );
}

export default CartWidget;