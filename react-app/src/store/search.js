const SEARCH_PRODUCT = 'search/SEARCH_PRODUCT'

const searchProduct = (products) => ({
    type: SEARCH_PRODUCT,
    products
})

export const search = () => async(dispatch) => {
    const response = await fetch(`/api/search`)

    if (response.ok) {
        const searchResults = await response.json();
        dispatch(searchProduct(searchResults))
        return searchResults
    }
}

// const initialState = {search: {}};
export default function searchReducer (state={}, action){
    let newState;
    switch(action.type){
        case SEARCH_PRODUCT:
            newState = action.products
            return newState
        default:
            return state
    }
}