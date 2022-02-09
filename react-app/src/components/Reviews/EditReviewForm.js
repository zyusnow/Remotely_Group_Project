import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editReviewById } from '../../store/review'
import { getOneProduct } from '../../store/product'


export default function EditReviewForm({ reviewId, productId, setShowModal }) {
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
            dispatch(getOneProduct(productId))
            setShowModal(false)
        }
        
    }

    return (
        <>
            <div className="edit-review-form">
                <h3 className="edit-review-title">Edit Review</h3>
                <form>
                    <div className="edit-input-container">
                        <label>Select a rating: 
                            <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            >
                                <option value={Number(5)}>5</option>
                                <option value={Number(4)}>4</option>
                                <option value={Number(3)}>3</option>
                                <option value={Number(2)}>2</option>
                                <option value={Number(1)}>1</option>
                            </select>
                        </label>
                        <label>Add a comment (Optional): </label>
                        <textarea
                        id="edit-rev-textarea"
                        placeholder='Add a comment...'
                        autoComplete="off"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        />
                        <button onClick={editReview} type="submit" disabled={!rating} className="edit-rev-submit">Save Changes</button>
                    </div>
                </form>
            </div>
         </>
    )
}