
const GET_REVIEWS = 'reviews/GET_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

/* ----- ACTION CREATORS------ */
const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const editReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

/* ------ THUNK ACTIONS ------ */
export const getAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews/')

    if (response.ok) {
        const reviewsObj = await response.json()
        dispatch(getReviews(reviewsObj.reviews))
        return reviewsObj.reviews
    }
}

export const addOneReview = (reviewDetails) => async (dispatch) => {
    const response = await fetch('/api/reviews/new/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewDetails)
    })

    if (response.ok) {
        const review = await response.json()
        dispatch(addReview(review))
        return review
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

export const editReviewById = ({ reviewId, rating, comment, productId }) => async (dispatch)  => {
    const response = await fetch(`/api/reviews/${reviewId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating,
            comment,
            productId
        })
    })

    if (response.ok) {
        const editedReview = await response.json()
        dispatch(editReview(editedReview))
        return editedReview
    }
}

export const deleteReviewById = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reviewId
        })
    })

    if (response.ok) {
        dispatch(deleteReview(reviewId))
        return "Delete successful"
    }
}

/* ------ REDUCER ------ */
const initialState = {reviews: {}};
export default function reviewReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_REVIEWS:
            newState = {...state}
            newState.reviews = action.reviews.reduce((reviews, review) => {
                reviews[review.id] = review
                return reviews
            }, {})
            return newState
        case ADD_REVIEW:
            newState = {...state}
            newState.reviews[action.review.id] = action.review
            return newState
        case EDIT_REVIEW:
            newState = {...state}
            newState.reviews[action.review.id] = action.review
            return newState
        case DELETE_REVIEW:
            newState = {...state}
            delete newState.reviews[action.reviewId]
            return newState
        default:
            return state;
    }
}