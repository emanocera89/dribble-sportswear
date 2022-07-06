import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Item.css';
import BrandLogo from '../BrandLogo/BrandLogo';

function Item({ id, nombre, precio, stock, marca, imagenUrl }) {
    return (
        <div className='product-container'>
            <div className="product-item-small">
                <Link to={`/item/${id}`} title={nombre}>
                    <div className="product-item-small__visual">
                        <div className="brand">
                            <BrandLogo brand={marca} />
                        </div>
                        <img className="product-image normal-image" src={imagenUrl} alt={nombre} />
                        <div className="pill"><span className="black-bg">{stock}</span></div>
                    </div>
                </Link>
                <div className="product-item-small__info">
                    <h3 className="product-name"><Link to={`/item/${id}`} title={nombre}>{nombre}</Link></h3>
                    <div className="price">
                        <div className="price-box price">
                            <span className="regular-price">
                                <span className="price">$&nbsp;{precio}</span></span>
                        </div>
                    </div>
                    <div className="sizes-container">
                        <Link to={`/item/${id}`} className="button button__black button__noborder item-add-to-cart" title="Ver detalle">Ver detalle</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;