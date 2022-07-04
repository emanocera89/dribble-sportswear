import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Col, Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio, stock, imagenUrl }) {
    return (
        <Col xs={3}>
            <Card className="product-card">
                {stock === 0 ?
                    <div className="product-badge-wrapper"><Badge pill bg="danger" className="product-badge-danger">Sin stock</Badge></div>
                    :
                    <div className="product-badge-wrapper"><Badge pill bg="light" text="dark" className="product-badge-light">Stock: {stock}</Badge></div>
                }
                <Link to={`/item/${id}`} title={nombre}><Card.Img className="product-img" variant="top" src={imagenUrl} alt={nombre} /></Link>
                <Card.Body>
                    <Card.Title className="product-title"><Link to={`/item/${id}`} title={nombre}>{nombre}</Link></Card.Title>
                    <Card.Text className="product-price">${precio}</Card.Text>
                    {/*<ItemCount stock={stock} initial={1} />*/}
                    <div className='d-grid'>
                        <Link to={`/item/${id}`} className='btn btn-outline-dark'>Ver detalle</Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;