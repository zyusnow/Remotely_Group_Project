// constants
const GET_PRODUCTS = 'products/GET_PRODUCTS';
const GET_PRODUCT = 'products/GET_PRODUCT';
const ADD_PRODUCT = 'products/ADD_PRODUCT';
const DELETE_PRODUCT = 'products/DELETE_PRODUCT';

//actions creator
const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}

const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        product
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
}


//thunk
export const getAllProducts = () => async (dispatch) => {
    const res = await fetch('/api/products/');
    if (res.ok) {
        const productsObj = await res.json();
        dispatch(getProducts(productsObj.products));
        return productsObj.products
    }
}

export const getTopProducts = () => async (dispatch) => {
    const res = await fetch('api/products/top/');
    if (res.ok) {
        const productsObj = await res.json();
        dispatch(getProducts(productsObj.products));
        return productsObj.products
    }
}


export const getOneProduct = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}/`);
    if (res.ok) {
        const product = await res.json();
        dispatch(getProduct(product));
        return product
    }
}

export const addOneProduct = (productDetails) => async (dispatch) => {
    const res = await fetch('/api/products/new/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productDetails)
    });

    if (res.ok) {
        const product = await res.json();
        dispatch(addProduct(product))
        return product;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

export const updateOneProduct = (product, productId) => async dispatch => {
    const res = await fetch(`/api/products/edit/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(addProduct(data))
        return null;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

export const deleteOneProduct = productId => async dispatch => {
    const res = await fetch(`/api/products/delete/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
    })
    if (res.ok) {
        await dispatch(deleteProduct(+productId));
        return res
    }
}


//reducer
const initialState = {products: {}};
export default function productReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
            newState = {...state};
            newState.products = action.products.reduce((products, product) => {
                products[product.id] = product;
                return products;
            }, {});
            return newState
        case GET_PRODUCT:
            newState = {...state};
            newState.products[action.product.id] = action.product
            return newState;
        case ADD_PRODUCT:
            newState = {...state};
            newState.products[action.product.id] = action.product;
            return newState;
        case DELETE_PRODUCT:
            newState = {...state};
            delete newState.products[action.id]
            return newState;
        default:
            return state;
    }
}
