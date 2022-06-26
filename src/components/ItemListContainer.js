
import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';


function ItemListContainer({ title }) {
  
  return (
    <Container className='pt-4 pb-4'>
      <h2 className='mb-4'>{title}</h2>
      <ItemList />
    </Container>
  );
}

export default ItemListContainer;