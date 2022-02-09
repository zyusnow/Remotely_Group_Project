import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal'
import { getAllReviews, addOneReview, deleteReviewById } from'../../store/review'
import { getOneProduct } from '../../store/product';
import EditReviewForm from './EditReviewForm';

export default function Reviews({ productId }) {
    const dispatch = useDispatch()
    
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [editRevId, setEditRevId] = useState("")

    const userId = useSelector(state => state.session.user.id)
    const allReviewsObj = useSelector(state => state.review.reviews)
    
    const allReviewsArray = Object.values(allReviewsObj)
    const productReviews = allReviewsArray.filter(review => review.productId === +productId)

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

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
          dispatch(getOneProduct(+productId))
        }
      }

      const deleteReview = (e) => {
        e.preventDefault()
        let deletedReview = dispatch(deleteReviewById(Number(e.target.id)))
        
        if(deletedReview) {
            dispatch(getOneProduct(+productId))
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
                        <span>{review.user_name}: </span>
                        <span>{review.createdAt}</span>
                        <span>
                        <div>
                            {Array(review.rating).fill(
                                <span><i className="fas fa-star fa-xs"></i></span>).map((star, idx) => <span key={idx}>{star}</span>)}
                        </div>
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
                        <EditReviewForm reviewId={editRevId} productId={productId} setShowModal={setShowModal}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}