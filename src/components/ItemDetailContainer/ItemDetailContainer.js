import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function ItemDetailContainer(props) {
    const params = useParams()
    const [itemData, setItemData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getItem = () => {
        fetch(`https://api.npoint.io/b41f44aae25fe3b72f3b/items/${params.productId}`)
            .then((resp) => resp.json())
            .then((data) => { setItemData(data); setIsLoading(false)});
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getItem();
        }, 2000);
    }, []);

    return (
        <Container>
            <ItemDetail item={itemData} isLoading={isLoading} />
        </Container>
    )
}

export default ItemDetailContainer;