const SEARCH_PRODUCT = 'search/SEARCH_PRODUCT'

const searchProduct = (products) => ({
    type: SEARCH_PRODUCT,
    products
})

export const searchRes = (q) => async(dispatch) => {
    const response = await fetch(`/api/search?q=${q}/`)

    if (response.ok) {
        const searchResults = await response.json();
        dispatch(searchProduct(searchResults.products))
        return searchResults
    }
}

export default function searchReducer(state = {}, action){
    let newState;
    switch (action.type) {
        case SEARCH_PRODUCT:
            newState = action.products
            return newState
        default:
            return state
    }
}