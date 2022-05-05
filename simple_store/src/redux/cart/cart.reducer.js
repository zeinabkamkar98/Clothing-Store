import { CartActionType } from "./cart.type";
import {
  addItemToCart,
  deleteItemToCart,
  completeDeleteItemToCart,
} from "./cart.util";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionType.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemToCart(state.cartItems, action.payload),
      };
    case CartActionType.COMPLETE_DELETE_ITEM:
      return {
        ...state,
        cartItems: completeDeleteItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
