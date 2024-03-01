import { createReducer } from "@reduxjs/toolkit";

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    // Reducer for adding items to the cart
    .addCase(ADD_TO_CART,  (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);
      if (isItemExist) {
        state.cart = state.cart.map((i) => (i._id === isItemExist._id ? item : i));
      } else {
        state.cart.push(item);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    })
    // Reducer for removing items from the cart
    .addCase(REMOVE_FROM_CART, (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((i) => i._id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    });
});

// Export action creators
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
