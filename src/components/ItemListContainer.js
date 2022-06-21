import './ItemListContainer.css';
import { Container, Row } from 'react-bootstrap';

function ItemListContainer({ title, children }) {
  return (
    <Container className='pt-4 pb-4'>
      <h2>{title}</h2>
      <Row>
        {children}
      </Row>
    </Container>
  );
}

export default ItemListContainer;