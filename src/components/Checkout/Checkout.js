import { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { collection, getDocs, getDoc, doc, getFirestore, addDoc, writeBatch, where } from 'firebase/firestore';
import Loading from "../Loading/Loading";
import CartTotal from "../CartTotal/CartTotal";

function Checkout() {
    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (cartCtx.totalQuantity === 0) {
            navigate(`/cart`, { replace: true });
        }
    }, []);


    const handleChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setForm(prevState => ({ ...prevState, [name]: value }));
    }

    const updateStock = () => {

        let newStock = [];
        const db = getFirestore();
        const batch = writeBatch(db);
        const itemsCollection = collection(db, "items");

        // obtengo todo el listado de items
        getDocs(itemsCollection).then((snapshot) => {
            if (snapshot.docs.length > 0) {
                let itemsArr = snapshot.docs.map((doc) => doc.data());
                // hago un mapeo de los items del carrito y a partir del id obtengo el stock de cada uno, 
                // a ese stock al mismo tiempo le resto la cantidad que compró el usuario
                // todo esto lo pusheo en una variable de tipo array, donde guardo id de item y stock
                const arrGet = cartCtx.cartItems.map((i) =>
                    newStock.push({
                        id: String(i.id),
                        stock: itemsArr[itemsArr.findIndex(result => result.id === i.id)].stock - i.quantity
                    })
                );
                // sobre esa variable de tipo array hago un mapeo y dentro de este uso batch para actualizar el stock de cada item
                const arrUpdate = newStock.map((i) => batch.update(doc(db, "items", String(i.id)), { stock: i.stock }));
                batch.commit();
                //console.log(newStock);

            } else {
                // si no puedo obtener el listado de items (la collection, no dejo avanzar al usuario y muestro un error)
                alert("se produjo un error, por favor intente más tarde")
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const order = {
            buyer: form,
            items: cartCtx.cartItems,
            date: new Date(),
            total: cartCtx.totalPrice
        }
        //console.log(order);
        const db = getFirestore();
        const purchaseOrdersCollection = collection(db, "compras");
        addDoc(purchaseOrdersCollection, order)
            .then(({ id }) => {
                updateStock();
                //console.log(id);
                cartCtx.clear();
                setIsLoading(false);
                navigate(`/purchaseOrder/${id}`, { replace: true });
            });
    }

    return (
        <Container fluid className="checkout-container">
            {isLoading && <Loading />}
            <Row className="pt-5">
                <Col xs={8} className="checkout-user-details-section">
                    <div className="shipping-section">
                        <div className="single-shipping">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="title">Completá el siguiente formulario</h4>
                                </div>
                                <div className="card-body shipping-content">
                                    <Form className="shipping-form" onSubmit={handleSubmit}>
                                        <Form.Group className="mb-4 required" controlId="clientName">
                                            <Form.Label>Nombre y Apellido</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Completa este campo"
                                                onChange={handleChangeInput}
                                                disabled={isLoading}
                                                required
                                            />
                                        </Form.Group>


                                        <Form.Group className="mb-4 required" controlId="clientPhone">
                                            <Form.Label>Teléfono</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                placeholder="Completa este campo"
                                                onChange={handleChangeInput}
                                                disabled={isLoading}
                                                required
                                            />
                                        </Form.Group>



                                        <Form.Group className="mb-4 required" controlId="clientEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Completa este campo"
                                                onChange={handleChangeInput}
                                                disabled={isLoading}
                                                required
                                            />
                                        </Form.Group>


                                        <div className="d-block mt-5">
                                            <Button className="btn-submit" type="submit" disabled={isLoading}>Finalizar Compra</Button>

                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={4} className="checkout-cart-details-section">
                    <CartTotal total={cartCtx.totalPrice} quantity={cartCtx.totalQuantity} hideFooter />
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;
