import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal'
import { getAllReviews, addOneReview, deleteReviewById } from'../../store/review'
import EditReviewForm from './EditReviewForm';

export default function Reviews({ productId }) {
    const dispatch = useDispatch()
    
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [addRev, setAddRev] = useState("")
    const [delRev, setDelRev] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [editRevId, setEditRevId] = useState("")

    const userId = useSelector(state => state.session.user.id)
    const allReviewsObj = useSelector(state => state.review.reviews)
    
    const allReviewsArray = Object.values(allReviewsObj)
    const productReviews = allReviewsArray.filter(review => review.productId === +productId)

    useEffect(() => {
        dispatch(getAllReviews())
        setAddRev("")
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
          setComment("")
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

      const openEditReviewForm = (e) => {
          setEditRevId(e.target.value)
          setShowModal(true)
      }

    return (
        <div className='review-container'>
            <form className="add-review-form">
                <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                >
                    <option value='' disabled>Rating</option>
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
                <button onClick={addReview} type="submit" disabled={!rating}>Add Review</button>
            </form>
            <div className='reviews-header'>Reviews</div>
            <div className='reviews-list'>
                {productReviews.length > 0 && productReviews.map((review, idx) => (
                    <div key={idx} className="reviews-content">
                    <div>{review.user_name}: </div>
                    <div>{review.createdAt}</div>
                    <span>{review.rating}
                        {review.comment}
                      {review.userId === userId && 
                        <>
                            <button onClick={deleteReview} id={review.id}>Delete Review</button>
                            <button onClick={openEditReviewForm} value={review.id}>Edit Review</button>
                        </>}
                    </span>
                  </div>
                ))}
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditReviewForm reviewId={editRevId} productId={productId}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}