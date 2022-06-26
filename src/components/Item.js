import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Col, Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import './Item.css';

function Item({ nombre, precio, stock, imagenUrl }) {
    return (
        <Col xs={3}>
            <Card className="product-card">
                {stock === 0 ?
                    <div className="product-badge-wrapper"><Badge pill bg="danger" className="product-badge-danger">Sin stock</Badge></div>
                    :
                    <div className="product-badge-wrapper"><Badge pill bg="light" text="dark" className="product-badge-light">Stock: {stock}</Badge></div>
                }
                <a href="#"><Card.Img className="product-img" variant="top" src={imagenUrl} /></a>
                <Card.Body>
                    <Card.Title className="product-title"><a href="#">{nombre}</a></Card.Title>
                    <Card.Text className="product-price">${precio}</Card.Text>
                    <ItemCount stock={stock} initial={1} />
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;