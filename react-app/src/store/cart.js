
//constants
const GET_CART = 'cart/GET_CART';
const ADD_CART = 'cart/ADD_CART_ITEM';

const getCart = (cart) =>
  { 
    return {
    type: GET_CART,
    cart
  }
  };

  const addCartItem = cartItem => {
    return {
      type: ADD_CART,
      cartItem
    }
  }


//Loads cart based on ID
export const loadCart = (cartId) => async (dispatch) => {
   console.log("string data SEE MEEEEE");
  const response = await fetch(`/api/cart/${cartId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    if (data.errors) {
      return;
    }
    dispatch(getCart(data));
  }
}

export const addToCart = (product) => async (dispatch) => {
  const res = await fetch('/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  if (res.ok) {
    const cartItem = await res.json();
    dispatch(addCartItem(product));
    return cartItem;
  } else if (res.status === 401) {
    return res.json().then(({ message }) => {
      throw new Error(message);
    });
  } else {
    throw new Error('Something went wrong');
  }
} 

const initialState = {};
//Reducer
export default function reducer(state = initialState, action) {

  let newState;

  switch (action.type) {
    case GET_CART:
      newState = {...state};
      newState.cart = action.cart;
      return newState;
    case ADD_CART_ITEM:
      newState = { ...state };
      newState.cart[action.cartItem.id] = action.cartItem;
      return newState; 
    default:
      return state;
  }
}

