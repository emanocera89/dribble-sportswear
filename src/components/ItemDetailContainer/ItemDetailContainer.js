import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getDoc, doc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer(props) {
    const params = useParams()
    const [itemData, setItemData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getItem = () => {
        setIsLoading(true);
        setItemData([]);
        const db = getFirestore();
        const itemRef = doc(db, "items", String(params.productId));
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                const results = [snapshot.data()];
                setItemData(results[0]);
                setIsLoading(false);
            }
        })
    }

    useEffect(() => {
        getItem();
    }, []);

    return (
        <Container fluid>
            <ItemDetail item={itemData} isLoading={isLoading} />
        </Container>
    )
}

export default ItemDetailContainer;