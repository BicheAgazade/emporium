export function favListReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      if (!state.find((product) => product.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;
      case "REMOVE_FROM_FAV":

      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}

