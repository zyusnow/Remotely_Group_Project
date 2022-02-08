// constants
const GET_PRODUCTS = 'products/GET_PRODUCTS';
const GET_PRODUCT = 'products/GET_PRODUCT'
const ADD_PRODUCT = 'products/ADD_PRODUCT'

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

//thunk
export const getAllProducts = () => async (dispatch) => {
    const res = await fetch('/api/products');
    // console.log("getAll thunk before", res)
    if (res.ok) {
        const productsObj = await res.json();
        // console.log("getAll thunk after", productsObj)
        dispatch(getProducts(productsObj.products));
        return productsObj.products
    }
}

export const getOneProduct = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}`);
    if (res.ok) {
        const product = await res.json();
        dispatch(getProduct(product));
        return product
    }
}

export const addOneProduct = (productDetails) => async (dispatch) => {
    const res = await fetch('/api/products/new', {
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
        default:
            return state;
    }
}
