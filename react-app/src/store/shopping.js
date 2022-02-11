const CLEAR_CART = "shopping_cart/CLEAR_CART";
const GET_TOTALS = "shopping_cartt/GET_TOTALS";

//Actions
const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

// const getTotals = (cart) => {
//   return {
//     type: GET_TOTALS,
//     cart
//   }
// }

//Thunk Functions

//Delete All Items From Cart
export const clearCartItems = (cartId) => async (dispatch) => {
  const res = await fetch('/api/cart/clear', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (res.ok) {
    await dispatch(clearCart(cartId))
    return res.json();
  } else if (res.status === 401) {
    return res.json().then(({ message }) => {
      throw new Error(message);
    });
  } else {
    throw new Error("An Error Has Occurred");
  }
}

// export const getCartTotal = (cartId) => async () => {
//   const res = await fetch(`/api/cart/total/${cartId}`, {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//   if (res.ok) {
//     const cart = await res.json();
//     console.log(cart)
//     return cart;
//   }
// }

export const getCartTotal = (cartId) => async() => {
  const res = await fetch(`/api/cart/total/${cartId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (res.ok) {
    const total = await res.json()
    console.log(total)
    return total;
  }
}

//Reducer
const initialState = {}

export default function reducer(state = initialState, action) {

  let newState;
  switch (action.type) {
    case GET_TOTALS:
      newState = {...state};
      newState.cart = action.cart;
      return newState;
    case CLEAR_CART:
      newState = {...state};
      delete newState.cart[action.id];
      return newState;
    default:
      return state;
  }
}
