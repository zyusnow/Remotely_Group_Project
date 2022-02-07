
//constants
const GET_CART = 'cart/GET_CART';

const getCart = (cart) => ({
  type: GET_CART,
  cart

});

const initialState = { cart: [] };

//Loads cart based on ID
export const loadCart = (cartId) => async (dispatch) => {
   console.log("string data SEE MEEEEE");
  const response = await fetch(`/api/cart/${cartId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    if (data.errors) {
      return;
    }
    dispatch(getCart(data));
  }
}

//Recucer
export default function reducer(state = initialState, action) {

  let newState = {};

  switch (action.type) {
    case GET_CART:
      newState = {...state};
      newState[action.cart.id] = action.cart
      return newState
    default:
      return state;
  }
}
