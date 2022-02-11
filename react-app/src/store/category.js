// constants
const GET_CATEGORIES = 'products/GET_CATEGORIES';
const GET_CATEGORY = 'products/GET_CATEGORY';

// action creators
const getCategories= (categories) => {
    return {
        type: GET_CATEGORIES,
        categories
    }
}
const getCategory= (category) => {
    return {
        type: GET_CATEGORY,
        category
    }
}

// thunk
export const getAllCategories = () => async dispatch => {
    const res = await fetch('/api/categories/');

    if (res.ok) {
        const categories = await res.json();
        dispatch(getCategories(categories))
    }
}

export const getOneCategory = (categoryName) => async dispatch => {
    const res = await fetch(`/api/categories/${categoryName}/`);

    if (res.ok) {
        const category = await res.json();
        dispatch(getCategory(category))
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
                categories[category.name] = category;
                return categories;
            }, {});
            return newState;
        case GET_CATEGORY:
            newState = {...state};
            newState.categories[action.category.name] = action.category
            return newState;
        default:
            return state;
    }
}

export default categoryReducer;
