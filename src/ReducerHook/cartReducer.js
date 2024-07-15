

export const initialState = {
    cart: [],
    total: 0,
};

export function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            );
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return { ...state, cart: updatedCart };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case 'UPDATE_QUANTITY':
            const updatedCart = state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            return { ...state, cart: updatedCart };
        case 'CALCULATE_TOTAL':
            const total = state.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            return { ...state, total };
        default:
            return state;
    }
}
