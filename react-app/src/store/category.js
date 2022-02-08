// constants
const GET_CATEGORIES = 'products/GET_CATEGORIES';

// action creators
const getCategories= (categories) => {
    return {
        type: GET_CATEGORIES,
        categories
    }
}

// thunk
export const getAllCategories = () => async dispatch => {
    const res = await fetch('/api/categories');

    if (res.ok) {
        const categories = await res.json();
        dispatch(getCategories(categories))
    }
}


// reducer
const initialState = { categories: {} };
const categoryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_CATEGORIES:
            newState = {...state};
            newState.categories = action.categories.categories.reduce((categories, category) => {
                categories[category.id] = category;
                return categories;
            }, {});
            return newState;
        default:
            return state;
    }
}

export default categoryReducer;
