import { combineReducers } from 'redux';

import itemsReducer from './items';
import cartReducer from './cart';

const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
