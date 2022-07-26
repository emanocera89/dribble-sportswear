import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import "./PurchaseOrder.css";
import { IoCheckmarkSharp } from "react-icons/io5";

function PurchaseOrder(props) {

    const params = useParams();
    const [orderData, setOrderData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getItem = () => {
        setOrderData({});
        const db = getFirestore();
        const orderRef = doc(db, "compras", String(params.orderId));
        getDoc(orderRef).then((snapshot) => {
            if (snapshot.exists()) {
                const results = [snapshot.data()];
                setOrderData(results[0]);
                setIsLoading(false)
            }
        })
    }

    useEffect(() => {
        getItem();
    }, []);

    return (
        <Container fluid className="order-container">
            {isLoading ?
                <Loading />
                :
                <div className="card">
                    <div className="card-header">
                        <div className="check-circle"><IoCheckmarkSharp /></div>
                        <h4 className="title">¡Tu compra ha sido exitosa!</h4>
                        <label>Id de orden</label>
                        <p className="order-number">{params.orderId}</p>
                    </div>
                    <div className="card-body">

                        <ul className="order-item-list">
                            {orderData.items && orderData.items.map((i) => (
                                <li key={i.id}>
                                    <div className="order-item-card">
                                        <img className="item-image" src={i.image} />

                                        <h6 className="item-name">{i.name} (x{i.quantity})</h6>

                                        <b className="item-subtotal">${i.subtotal}</b>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="order-total">
                            <label>Total</label>
                            <b>${orderData.total}</b>
                        </div>
                        <Link to="/" className="btn-outlined">Seguir Comprando</Link>
                    </div>
                </div>
            }
        </Container>
    )
}

export default PurchaseOrder;