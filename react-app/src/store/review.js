
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
    const response = await fetch('/api/reviews')

    if (response.ok) {
        const reviewsObj = await response.json()
        dispatch(getReviews(reviewsObj.reviews))
        return reviewsObj.reviews
    }
}

export const addOneReview = (reviewDetails) => async (dispatch) => {
    const response = await fetch('/api/reviews/new', {
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
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

export const editReviewById = ({ reviewId, rating, comment, productId }) => async (dispatch)  => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
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
        dispatch(editReview(editReview))
        return editedReview
    }
}

export const deleteReviewById = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            reviewId
        })
    })

    if (response.ok) {
        const reviewToDelete = await response.json()
        dispatch(deleteReview(reviewToDelete))
        return "Delete successful"
    }
}