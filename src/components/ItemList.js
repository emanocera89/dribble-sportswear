import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import "./ItemList.css";
import Item from './Item';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ItemList({ items }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
                .then((resp) => resp.json())
                .then((data) => setProducts(data));
                setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className='item-list-container'>
            {isLoading && <div className='skeleton-list'><Skeleton height={420} inline count={4} /></div>}
            <Row>
                {products && products.map(product => <Item key={product.id} nombre={product.nombre} precio={product.precio} stock={product.stock} imagenUrl={product.imagenUrl} />)}
            </Row>
        </div>
    );
}

export default ItemList;