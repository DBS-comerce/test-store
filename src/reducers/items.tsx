import { LOAD_ITEMS, LOAD_CATEGORIES, ItemsState, ItemsActionTypes } from './types';

const initialState: ItemsState = {
    items: [],
    categories: [],
};

export default (state = initialState, action: ItemsActionTypes): ItemsState => {
    switch (action.type) {
        case LOAD_ITEMS:
            return {
                ...state,
                items: [...action.payload],
            };

        case LOAD_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload],
            };

        default:
            return state;
    }
};
