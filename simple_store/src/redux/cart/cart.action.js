import { CartActionType } from "./cart.type";

export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: CartActionType.DELETE_ITEM,
  payload: item,
});

export const completeDeleteItem = (item) => ({
  type: CartActionType.COMPLETE_DELETE_ITEM,
  payload: item,
});
