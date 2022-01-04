import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cartreducer";

export default combineReducers ({
    user: userReducer,
    cart : cartReducer
});