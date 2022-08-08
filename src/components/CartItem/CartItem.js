import { Link } from "react-router-dom";
import "./CartItem.css";
import { IoTrashBinOutline } from "react-icons/io5";

function CartItem({ item, onDelete, ...rest }) {
    return (
        <li className="cart-item d-flex" {...rest}>
            <button className="remove-line-item" onClick={e=> onDelete(item.id)} title="Eliminar del carrito"><IoTrashBinOutline /></button>
            <div className="card-product-image">
                <Link to={`/item/${item.id}`} className="item-image"><img src={item.image} width="100%" alt={item.name} /></Link>
            </div>
            <div className="card-product-info">
                <Link to={`/item/${item.id}`} className="item-name"><h5>{item.name}</h5></Link>
                <div className="d-flex">
                    <div className="item-attributes d-flex flex-column">
                        <p className="line-item-attributes">
                            <span className="name">Color:&nbsp;</span>
                            <span className="value">-</span>
                        </p>
                        <p className="line-item-attributes">
                            <span className="name">Talle:&nbsp;</span>
                            <span className="value">-</span>
                        </p>
                    </div>

                    <div className="line-item-price d-flex flex-column">
                        <p className="line-item-price-info">Precio</p>
                        <div className="price">
                            <div className="sales">
                                <span className="value">${item.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="line-item-quantity d-flex flex-column">
                        <p className="line-item-pricing-info quantity-label">Cantidad</p>
                        <span className="value">{item.quantity}</span>
                    </div>
                    <div className="line-item-total-price">
                        <p className="line-item-price-info">Subtotal</p>
                        <div className="price">
                            <span className="pricing line-item-total-price-amount">${item.subtotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;