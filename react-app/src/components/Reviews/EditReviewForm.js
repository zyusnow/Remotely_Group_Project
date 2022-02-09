import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editReviewById } from '../../store/review'


export default function EditReviewForm({ reviewId, productId }) {
    const dispatch = useDispatch()

    const review = useSelector(state => state.review.reviews[+reviewId])

    const [rating, setRating] = useState(review.rating)
    const [comment, setComment] = useState(review.comment)

    const editReview = async (e) => {
        e.preventDefault()

        const payload = {
            productId,
            reviewId,
            comment,
            rating
        }

        const editedReview = await dispatch(editReviewById(payload))

        if (editedReview) {
            window.location.reload(true)
        }
    }

    return (
        <div style={{backgroundColor: 'white'}}>
            <h3>Edit Form</h3>
            <form className="edit-review-form">
                <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                >
                    <option value={Number(5)}>5</option>
                    <option value={Number(4)}>4</option>
                    <option value={Number(3)}>3</option>
                    <option value={Number(2)}>2</option>
                    <option value={Number(1)}>1</option>
                )
                </select>
                <textarea
                placeholder='Add a comment...'
                autoComplete="off"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={editReview} type="submit" disabled={!rating}>Save Changes</button>
            </form>
        </div>
    )
}