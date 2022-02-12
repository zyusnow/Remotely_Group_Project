
//constants
const GET_CART = 'cart/GET_CART';
const ADD_CART = 'cart/ADD_CART_ITEM';
const DELETE_CART = 'cart/DELETE_CART_ITEM'
const EDIT_CART = 'cart/EDIT_CART_ITEM'

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

const deleteCartItem = cartItem => {
  return {
    type: DELETE_CART,
    cartItem
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
    dispatch(getCart(data));
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
export const deleteFromCart = (productId) => async (dispatch) => {
  const res = await fetch(`/api/cart/delete/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    await dispatch(deleteCartItem(productId));
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

const initialState = {};
//Reducer
export default function reducer(state = initialState, action) {

  let newState;

  switch (action.type) {
    case GET_CART:
      newState = { ...state };
      newState.cart = action.cart;
      return newState;
    case ADD_CART:
      newState = { ...state };
      newState.cart = action.cart;
      return newState;
    case DELETE_CART:
      newState = { ...state };
      delete newState.cart[action.id];
      return newState;
    default:
      return state;
  }
}
