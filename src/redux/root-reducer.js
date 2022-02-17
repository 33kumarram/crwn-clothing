import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cartreducer";
import shopReducer from "./shop/shopreducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
};
const rootReducer= combineReducers ({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig,rootReducer);