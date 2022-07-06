import { Row } from 'react-bootstrap';
import "./ItemList.css";
import Item from '../Item/Item';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ItemList({ items, isLoading }) {
    return (
        <div className='item-list-container'>
            {isLoading && <div className='skeleton-list'><Skeleton height={420} inline count={5} /></div>}
            <Row>
                {items && items.map(item => 
                    <Item 
                        key={item.id} 
                        id={item.id}
                        nombre={item.nombre} 
                        precio={item.precio} 
                        stock={item.stock} 
                        imagenUrl={item.imagenUrl} 
                        marca={item.marca}
                    />
                )}
            </Row>
        </div>
    );
}

export default ItemList;