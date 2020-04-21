import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, CLEAR_CART, CartActionTypes, CartState } from './types';

const initialState: CartState = {
    items: [],
};

export default (state = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case CLEAR_CART:
            console.log(333333333);
            return {
                ...state,
                items: initialState.items,
            };
        default:
            return state;
    }
};
