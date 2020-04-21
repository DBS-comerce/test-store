import axios from 'axios';
import { LOAD_CATEGORIES, LOAD_ITEMS } from '../reducers/types';

export function loadItemsData() {
    return (dispatch: any) => {
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

export function loadCategoriesData() {
    return (dispatch: any) => {
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
