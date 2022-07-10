import React, { useState } from "react";

const CartContext = React.createContext({
    cartItems: [],
    totalQuantity: 0,
    isInCart: false,
    addItem: () => { },
    removeItem: () => { },
    clear: () => { }
});

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [isInCart, setIsInCart] = useState(false);

    const addItem = (item, quantity) => {
        setIsInCart(false);
        let newCartItems = [...cartItems];
        let idFound = cartItems.findIndex(i => i.itemId === item.id);

        if (idFound == -1) {
            // el producto no está en el carrito, entonces genera un nuevo Id en el array
            const price = parseFloat(item.precio) * quantity;
            newCartItems = [
                ...newCartItems,
                {
                    itemId: item.id,
                    item: item,
                    price: price,
                    quantity: quantity
                }
            ];
            alert("Item agregado al carrito");
        } else {
            // el producto ya existe en el carrito, entonces actualiza la cantidad
            const itemFound = newCartItems[idFound]
            const newQty = itemFound.quantity + quantity;
            const price = parseFloat(item.precio) * newQty;
            newCartItems[idFound] = { ...itemFound, quantity: newQty, price: price }


            alert("Se actualizó la cantidad de este producto en el carrito");
            setIsInCart(true);
        }
        updateTotalQuantity(newCartItems);
        setCartItems(newCartItems);
    }

    const updateTotalQuantity = (arr) => {
        setTotalQuantity(arr.reduce((total, currentValue) => total = total + currentValue.quantity, 0));
    }

    const removeItem = (itemId) => {
        setIsInCart(false);
        let newCartItems = [...cartItems]
        let idFound = cartItems.findIndex(i => i.itemId === itemId);
        if (idFound > -1) {
            newCartItems.splice(idFound, 1);
            updateTotalQuantity(newCartItems);
            setCartItems(newCartItems);
        }
    }

    const clear = () => {
        setIsInCart(false);
        updateTotalQuantity([]);
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            totalQuantity: totalQuantity,
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