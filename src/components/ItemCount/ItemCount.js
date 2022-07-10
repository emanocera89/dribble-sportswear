import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    const [value, setValue] = useState(stock !== 0 ? initial : 0);

    const handleChangeQty = (e) => {
        const inputValue = e.target.value;
        setValue(parseInt(inputValue));
        if (!inputValue || inputValue <= 0) {
            setValue(initial)
        }
    }

    const handleCheckQty = () => {
        if (value > stock) {
            setValue(stock);
        }
    }

    const handleIncreaseQty = () => {
        if (value < stock) {
            setValue(value + 1)
        }
    }

    const handleDecreaseQty = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }

    const handleAddToCart = (e) => {
        e.preventDefault();
        onAdd(value);
        setValue(initial);
    }

    return (
        <Form className="item-count-container" onSubmit={e => console.log('submit')}>
            <Form.Group className="input-container">
                <label>Cantidad</label>
                <InputGroup className="" hasValidation>
                    <Button variant="outline-secondary" onClick={handleDecreaseQty} disabled={value <= 1}>-</Button>
                    <FormControl className="input-counter" type="number" disabled={value <= 0} value={value} onBlur={handleCheckQty} onChange={e => handleChangeQty(e)} required isInvalid={value > stock} />
                    <Button variant="outline-secondary" onClick={handleIncreaseQty} disabled={value >= stock}>+</Button>
                    <Form.Control.Feedback type="invalid">
                        Sin stock
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <div className="d-grid gap-2 button-container">
                <Button type="submit" onClick={handleAddToCart} className="btn-add-to-cart" disabled={value <= 0 || value > stock}>Agregar al carrito</Button>
            </div>
        </Form>
    );
}

export default ItemCount;