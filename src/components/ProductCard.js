import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, Button } from 'react-bootstrap';

function ProductCard() {
    return (
        <Col xs={3}>
            <Card>
                <Card.Img variant="top" src="https://sc04.alicdn.com/kf/H889396eb86364b7b89251a2e7e2dea3f6.jpg" />
                <Card.Body>
                    <Card.Title>Durable Men Basketball Sports Shoes High Cut Durable Basketball Shoes</Card.Title>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;