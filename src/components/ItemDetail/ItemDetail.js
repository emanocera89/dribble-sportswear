import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import BrandLogo from '../BrandLogo/BrandLogo';

function ItemDetail({ item, isLoading }) {
    const [quantity, setQuantity] = useState(0);

    const onAdd = (qty) => {
        setQuantity(qty)
    }

    return (
        <div className='product-detail-container'>
            <div className="uk-grid-small uk-grid">
                <div className="uk-first-column">
                    <div className="gallery-product">
                        {isLoading ? <Skeleton height={600} /> :
                            <>
                                <img src={item.detailImgUrl && item.detailImgUrl[0]} width="100%" />
                                <Row>
                                    {item.detailImgUrl && item.detailImgUrl.map((img, id) => (
                                        id > 0 && <Col xs={6}><img src={img} width="100%" className='secondary-img' /></Col>
                                    ))}
                                </Row>
                            </>
                        }
                    </div>
                </div>
                <div className="sidebar-right greyBackground-bg">
                    <form id="product_addtocart_form">
                        <div className="sticky-sidebar" >
                            <div className="inner-wrapper-sticky" >
                                <div className="sidebar-padding">
                                    {isLoading ?
                                        <>
                                            <Skeleton height={20} width={100} className="mb-4" />
                                            <Skeleton height={40} width={300} className="mb-4" />
                                            <Skeleton height={30} width={100} className="mb-4" />
                                            <Skeleton height={10} width={500} className="mb-2" count={3} />
                                            <Skeleton height={10} width={300} className="mb-5" />
                                            <Skeleton height={60} width={300} className="mb-4" />
                                        </>
                                        :
                                        <>
                                            <div className="">
                                                <div className="breadcrumbs">
                                                    <ul className="uk-breadcrumb">
                                                        <li className="home">
                                                            <Link to="/" title="Ir a la página de inicio" >
                                                                <span >Inicio</span>
                                                            </Link>
                                                        </li>
                                                        <li className="product">
                                                            <span className="last-crumb">{item.nombre}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-logo">
                                                    <BrandLogo brand={item.marca} />
                                                </div>
                                                <div className="product-name mb-3">
                                                    <h1 >
                                                        {item.nombre}
                                                    </h1>
                                                </div>
                                                {item.stock <= 0 &&
                                                    <div className="d-flex mb-4">
                                                        <div className="pill uk-margin-right">
                                                            <span className="bg-danger">Sin stock</span>
                                                        </div>
                                                    </div>
                                                }
                                                <div>
                                                    <div className="product-type-data mb-4">
                                                        <div className="price-box price">
                                                            <span className="regular-price">
                                                                <span className="price">$&nbsp;{item.precio}</span>                                                                        </span>
                                                        </div>
                                                        <p className='mt-4'>{item.descripcion}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container1-wrapper">
                                                <div className="product-options d-none">
                                                    <div className="product-options">
                                                        <dl className="last">
                                                            <dt className="uk-flex uk-flex-middle"><label className="select-size" >Seleccionar tamaño</label></dt>
                                                            <dd className="last">
                                                                <div className="input-box uk-position-relative">
                                                                    <select className="required-entry attribute-select">
                                                                        <option value="">Elija una opción...</option>
                                                                        <option value="110" price="0">S</option>
                                                                        <option value="109" price="0">M</option>
                                                                        <option value="108" price="0">L</option>
                                                                        <option value="107" price="0">XL</option>
                                                                        <option value="106" price="0">XXL</option>
                                                                        <option value="105" price="0">XXXL</option>
                                                                    </select>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="product-options-bottom">
                                                    {quantity <= 0 && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
                                                    {quantity > 0 && <Link to="/cart" className="btn-submit">Comprar ahora ({quantity})</Link>}
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;