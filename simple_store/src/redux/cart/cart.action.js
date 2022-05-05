import { CartActionType } from "./cart.type";

export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});
