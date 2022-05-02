import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    
    if(action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const updatedItems = state.items.concat(action.item);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatch({type: 'ADD_ITEM', item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatch({type: 'REMOVE_ITEM'})
    };

    const cartContext = {
        items : cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider