import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, CLEAR_CART, Item } from '../reducers/types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { CartActionTypes } from '../reducers/types';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, CartActionTypes>;

export function addItemToCart(item: Item): ThunkResult<void> {
    return (dispatch): void => {
        dispatch({ type: ADD_ITEM_TO_CART, payload: item });
    };
}

export function deleteItemFromCart(id: number): ThunkResult<void> {
    return (dispatch): void => {
        dispatch({ type: DELETE_ITEM_FROM_CART, payload: id });
    };
}

export function clearCart(): ThunkResult<void> {
    return (dispatch): void => {
        dispatch({ type: CLEAR_CART, payload: null });
    };
}
