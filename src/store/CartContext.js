import React, { useState } from "react";

const CartContext = React.createContext({
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0.00,
    isInCart: false,
    addItem: () => { },
    removeItem: () => { },
    clear: () => { }
});

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0.00);
    const [isInCart, setIsInCart] = useState(false);

    const addItem = (item, quantity) => {
        setIsInCart(false);
        let newCartItems = [...cartItems];
        let idFound = cartItems.findIndex(i => i.itemId === item.id);

        if (idFound == -1) {
            // el producto no está en el carrito, entonces genera un nuevo Id en el array
            const subtotal = parseFloat(item.precio) * quantity;
            newCartItems = [
                ...newCartItems,
                {
                    itemId: item.id,
                    name: item.nombre,
                    description: item.descripcion,
                    image: item.imagenUrl,
                    price: item.precio,
                    item: item,
                    subtotal: subtotal,
                    quantity: quantity
                }
            ];
            alert("Item agregado al carrito");
        } else {
            // el producto ya existe en el carrito, entonces actualiza la cantidad
            const itemFound = newCartItems[idFound]
            const newQty = itemFound.quantity + quantity;
            const subtotal = parseFloat(item.precio) * newQty;
            newCartItems[idFound] = { ...itemFound, quantity: newQty, subtotal: subtotal }


            alert("Se actualizó la cantidad de este producto en el carrito");
            setIsInCart(true);
        }
        updateTotalQuantity(newCartItems);
        updateTotalPrice(newCartItems);
        setCartItems(newCartItems);
    }

    const updateTotalQuantity = (arr) => {
        setTotalQuantity(arr.reduce((total, currentValue) => total = total + currentValue.quantity, 0));
    }

    const updateTotalPrice = (arr) => {
        setTotalPrice(arr.reduce((total, currentValue) => total = total + currentValue.subtotal, 0));
    }

    const removeItem = (itemId) => {
        setIsInCart(false);
        let newCartItems = [...cartItems]
        let idFound = cartItems.findIndex(i => i.itemId === itemId);
        if (idFound > -1) {
            newCartItems.splice(idFound, 1);
            updateTotalQuantity(newCartItems);
            updateTotalPrice(newCartItems);
            setCartItems(newCartItems);
        }
    }

    const clear = () => {
        setIsInCart(false);
        updateTotalQuantity([]);
        updateTotalPrice([]);
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            totalQuantity: totalQuantity,
            totalPrice: totalPrice,
            isInCart: isInCart,
            addItem: addItem,
            removeItem: removeItem,
            clear: clear
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;