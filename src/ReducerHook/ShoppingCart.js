// src/ShoppingCart.js

import React, { useReducer, useEffect } from 'react';
import { cartReducer, initialState } from './cartReducer';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        dispatch({ type: 'CALCULATE_TOTAL' });
    }, [state.cart]);

    const handleAddItem = item => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const handleRemoveItem = id => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                <button onClick={() => handleAddItem({ id: 1, name: 'Item 1', price: 10 })}>Add Item 1</button>
                <button onClick={() => handleAddItem({ id: 2, name: 'Item 2', price: 20 })}>Add Item 2</button>
            </div>
            <ul>
                {state.cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                            min="1"
                        />
                    </li>
                ))}
            </ul>
            <h2>Total: ${state.total}</h2>
        </div>
    );
};

export default ShoppingCart;
