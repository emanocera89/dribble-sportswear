import { Row, Col, Button } from "react-bootstrap";
import "./CartTotal.css";
import { Link } from "react-router-dom";

function CartTotal({ total, quantity, hideFooter }) {
    return (
        <div className="cart-total-container">
            <h4 className="title">Tu resumen</h4>
            <Row className="cart-subtotal">
                <Col xs={4}>
                    <p>Productos</p>
                </Col>
                <Col xs={8}>
                    <p className="text-right">
                        <span className="strike-through original-total pr-1"></span>
                        <span className="sub-total">{quantity}</span>
                    </p>
                </Col>
            </Row>
            <div className="cart-checkout-summary-divider"></div>
            <Row className="cart-subtotal">
                <Col xs={4}>
                    <p>Subtotal</p>
                </Col>
                <Col xs={8}>
                    <p className="text-right">
                        <span className="strike-through original-total pr-1"></span>
                        <span className="sub-total">${total}</span>
                    </p>
                </Col>
            </Row>
            <div className="cart-checkout-summary-divider"></div>
            <Row className="cart-shipping-cost">
                <Col xs={8}>
                    <p>Costo de envío</p>
                </Col>
                <Col xs={4}>
                    <p className="text-right shipping-cost">
                        GRATIS
                    </p>
                </Col>
            </Row>
            <div className="cart-checkout-summary-divider"></div>
            <Row className="estimated-total">
                <Col xs={8}>
                    <strong>Total</strong>
                </Col>
                <Col xs={4}>
                    <span className="text-right grand-total">${total}</span>
                </Col>
            </Row>

            {!hideFooter &&
                <Row>
                    <Col xs={12}>
                        <Link to="/checkout" className="btn-submit mt-4 mb-3">CHECKOUT</Link>
                    </Col>
                </Row>
            }
            <div className="content-asset">
                <div className="cards-container">
                    <img className="icon payment-card-icon" src="https://www.svgrepo.com/show/328127/visa.svg" />
                    <img className="icon payment-card-icon" src="https://www.svgrepo.com/show/328121/mastercard.svg" />
                    <img className="icon payment-card-icon" src="https://www.svgrepo.com/show/328129/amex.svg" />
                    <img className="icon payment-card-icon" src="https://www.svgrepo.com/show/328128/diners.svg" />
                    <img className="icon payment-card-icon" src="https://www.svgrepo.com/show/328126/jcb.svg" />
                    <img className="icon payment-card-icon" src="https://www.svgrepo.com/show/328122/paypal.svg" />
                </div>
            </div>

        </div>
    )
}

export default CartTotal