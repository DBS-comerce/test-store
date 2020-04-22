import axios from 'axios';
import { LOAD_CATEGORIES, LOAD_ITEMS } from '../reducers/types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { ItemsActionTypes } from '../reducers/types';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, ItemsActionTypes>;

export function loadItemsData(): ThunkResult<void> {
    return (dispatch): void => {
        axios
            .get('http://www.mocky.io/v2/5e982fa93500007f00c47f6c')
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({ type: LOAD_ITEMS, payload: response.data });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export function loadCategoriesData(): ThunkResult<void> {
    return (dispatch): void => {
        axios
            .get('http://www.mocky.io/v2/5e982f9c3500007a00c47f6b')
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({ type: LOAD_CATEGORIES, payload: response.data });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}
