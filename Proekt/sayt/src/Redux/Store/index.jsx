import { combineReducers, createStore } from "redux";
import { cartReducer } from "../Reducers/cart.reducer";
import { favListReducer } from "../Reducers/fav.reducer";


const reducers = combineReducers({
  cartList: cartReducer,
  favList: favListReducer
});

export const globalState = createStore(reducers);
