import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllReviews, addOneReview, editReviewById, deleteReviewById } from'../../store/review'

export default function Reviews({ productId }) {
    const dispatch = useDispatch()
    
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [addRev, setAddRev] = useState("")
    const [editRev, setEditRev] = useState("")
    const [delRev, setDelRev] = useState("")

    const userId = useSelector(state => state.session.user.id)
    const allReviewsObj = useSelector(state => state.review.reviews)
    
    const allReviewsArray = Object.values(allReviewsObj)
    const productReviews = allReviewsArray.filter(review => review.productId === +productId)

    useEffect(() => {
        dispatch(getAllReviews())
        setAddRev("")
        // setEditRev("")
        setDelRev("")
    }, [dispatch, addRev, delRev])

    const addReview = (e) => {
        e.preventDefault();
    
        const payload = {
          userId,
          productId: +productId,
          comment,
          rating
        }
    
        let newReview = dispatch(addOneReview(payload))
        if(newReview) {
          setComment('')
          setRating("")
          setAddRev("Added Review")
        }
      }

      const deleteReview = (e) => {
        e.preventDefault()
        let deletedReview = dispatch(deleteReviewById(Number(e.target.id)))
        
        if(deletedReview) {
            setDelRev('Delete successful')
        }
      }

    return (
        <div className='review-container'>
            <div className='reviews-header'>Reviews</div>
            <div className='reviews-list'>
                {productReviews.length > 0 && productReviews.map((review, idx) => (
                    <div key={idx} className="reviews-content">
                    <div>{review.user_name}: </div>
                    <div>{review.createdAt}</div>
                    <span>{review.rating}
                        {review.comment}
                      {review.userId === userId && 
                        <button onClick={deleteReview} id={review.id}>Delete Review</button>}
                        {/* <button onClick={editReview}>Edit Review</button> */}
                    </span>
                  </div>
                ))}
            </div>
            <div className="add-review">
                <select>
                required
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                </select>
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