export function addToCartAction(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      productId: productId,
    },
  };
};
