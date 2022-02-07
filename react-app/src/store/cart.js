//constants
const GET_CART = 'cart/GET_CART';

const getCart = (cart) => ({
  type: GET_CART,
  payload: cart
});

//Loads cart based on ID
export const getCart = () => async (dispatch) => {
  const response = await fetch('/api/cart/cartId', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getCart(data));
  }
}

//Recucer
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case GET_CART:
      return { cart: action.payload }
    default:
      return state;
  }
}
