import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import {productReducer} from './reducers/product';
import { cartReducer } from "./reducers/cart";
import { orderReducer } from "./reducers/order";
import { eventReducer } from "./reducers/event";






const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
    event: eventReducer,

  },
});

export default Store;
