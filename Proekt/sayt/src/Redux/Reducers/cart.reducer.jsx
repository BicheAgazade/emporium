export function cartReducer(state = [], action) {
  if (action.type === "ADD_TO_CART") {
    const foundProduct = state.find((item) => item.id === action.payload.id);

    if (foundProduct) {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...state, { ...action.payload, quantity: 1 }];
    }
  } 
  else if (action.type === "REMOVE_FROM_CART") {
    return state.filter((item) => item.id !== action.payload.productId);
  }
 return state;
}
