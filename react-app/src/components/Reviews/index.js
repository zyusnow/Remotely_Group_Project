import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllReviews, addOneReview, editReviewById, deleteReviewById } from'../../store/review'

export default function Reviews(productId) {
    const dispatch = useDispatch()
    
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [addRev, setAddRev] = useState("")
    const [editRev, setEditRev] = useState("")
    const [delRev, setDelRev] = useState("")

    const userId = useSelector(state => state.session.user.id)
    const allReviewsObj = useSelector(state => state.review.reviews)
    const allReviewsArray = Object.valyes(allReviewsObj)
    const productReviews = allReviewsArray.filter(review => review.productId === +productId)

    useEffect(() => {
        dispatch(getAllReviews())
        setAddRev("")
        setEditRev("")
        setDelRev("")
    }, [dispatch, addRev, editRev, delRev])

    return (
        <div className='review-container'>
            <div className='reviews-header'>Reviews</div>
            <div className='reviews-list'>
                {productReviews.length > 0 && productReviews.map((review, idx) => (
                    <div key={idx} className="reviews-content">
                    <div>{review.user_name}: </div>
                    <span>{review.rating}
                      {review.userId === userId && 
                        <button id={review.id} onClick={deleteReview}>Delete Review</button>}
                        {/* <button onClick={editReview}>Edit Review</button> */}
                    </span>
                  </div>
                ))}
            </div>
            <div className="add-review">
                <textarea
                placeholder='Add a comment...'
                autoComplete="off"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={addReview} type="submit">Add Review</button>
            </div>
        </div>
    )
}