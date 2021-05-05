const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => action.payload !== item.id);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    let newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    let newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        if (cartItem.amount > 0)
          return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  // Default
  return state;
};

export default reducer;
