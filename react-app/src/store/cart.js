import { bindActionCreators } from "redux";

//constants
const GET_CART = 'cart/GET_CART';
const ADD_CART = 'cart/ADD_CART_ITEM';
const DELETE_CART = 'cart/DELETE_CART_ITEM'
const EDIT_CART = 'cart/EDIT_CART_ITEM'

const getCart = (cartItems) =>
  {
    return {
    type: GET_CART,
    cartItems
  }
  };

  const addCartItem = cartItem => {
    return {
      type: ADD_CART,
      cartItem
    }
  }

const deleteCartItem = id => {
  return {
    type: DELETE_CART,
    id
  }
}

const editCartItem = cartItem => {
  return {
    type: EDIT_CART,
    cartItem
  }
}

//Loads cart based on ID
export const loadCart = (cartId) => async (dispatch) => {
  const response = await fetch(`/api/cart/${cartId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getCart(data.cartItems));
  }
}

//Add item to cart
export const addToCart = (newCartItem) => async (dispatch) => {
  const res = await fetch('/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCartItem)
  });
    const cartItem = await res.json();
    dispatch(addCartItem(cartItem));
    return cartItem;

}
//Delete item from cart
export const deleteFromCart = (cartId) => async (dispatch) => {
  const res = await fetch(`/api/cart/delete/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res) {
    await dispatch(deleteCartItem(cartId));
    return res.json();
  } else if (res.status === 401) {
    return res.json().then(({ message }) => {
      throw new Error(message);
    });
  } else {
    throw new Error("Something went wrong");
  }
};

//Edit Cart Item
export const editCart = (editedCartItem) => async (dispatch) => {
  const res = await fetch('/api/cart/edit', {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(editedCartItem)
  })
   const cartItem = await res.json();
   dispatch(editCartItem(cartItem));
   return cartItem;
}

const initialState = { cartItems: {}};
//Reducer
export default function reducer(state = initialState, action) {

  let newState;

  switch (action.type) {
    case GET_CART:
      newState = { ...state };
      newState.cartItems = action.cartItems.reduce((accum, current) => {
        accum[current.id] = current;
        return accum;
      }, {});
      return newState;
    case ADD_CART:
      newState = { ...state };
      newState.cartItems[action.cartItem.id] = action.cartItem;
      return newState;
    case DELETE_CART:
      newState = { ...state };
      delete newState.cartItems[action.id];
      return newState;
    default:
      return state;
  }
}
