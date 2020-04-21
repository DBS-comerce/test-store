import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, CLEAR_CART, Item } from '../reducers/types';

export function addItemToCart(item: Item) {
    return (dispatch: any) => {
        dispatch({ type: ADD_ITEM_TO_CART, payload: item });
    };
}

export function deleteItemFromCart(id: number) {
    return (dispatch: any) => {
        dispatch({ type: DELETE_ITEM_FROM_CART, payload: id });
    };
}

export function clearCart() {
    return (dispatch: any) => {
        dispatch({ type: CLEAR_CART });
    };
}
