const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => action.payload !== item.id);
    return { ...state, cart: newCart };
  }
  return state;
};

export default reducer;
