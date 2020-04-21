export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export interface Item {
    id: number;
    name: string;
    descr: string;
    cost: number;
    categories: number[];
}

export interface Category {
    id: number;
    title: string;
}

export interface ItemsState {
    items: Item[];
    categories: Category[];
}

interface LoadItems {
    type: typeof LOAD_ITEMS;
    payload: Item[];
}

interface LoadCategories {
    type: typeof LOAD_CATEGORIES;
    payload: Category[];
}

export interface CartItem {
    id: number;
    name: string;
    descr: string;
    cost: number;
    categories: number[];
}

export type ItemsActionTypes = LoadItems | LoadCategories;

/**
 * Cart
 */

export interface AddItemToCart {
    type: typeof ADD_ITEM_TO_CART;
    payload: Item;
}

export interface DeleteFromCart {
    type: typeof DELETE_ITEM_FROM_CART;
    payload: number;
}

export interface ClearCart {
    type: typeof CLEAR_CART;
    payload: null;
}

export interface CartState {
    items: Item[];
}

export type CartActionTypes = AddItemToCart | DeleteFromCart | ClearCart;

export interface StoreState {
    items: ItemsState;
    cart: CartState;
}
