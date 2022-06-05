export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartTtem) => cartTtem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [{ ...cartItemToAdd, quantity: 1 }, ...cartItems];
  }
};

export const deleteItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartTtem) => cartTtem.id === cartItemToAdd.id
  );
  if (existingCartItem.quantity !== 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter((item) => item.id !== cartItemToAdd.id);
  }
};

export const completeDeleteItemToCart = (cartItems, cartItemToAdd) => {
  return cartItems.filter((item) => item.id !== cartItemToAdd.id);
};
