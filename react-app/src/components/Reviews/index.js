import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal'
import { getAllReviews, addOneReview, deleteReviewById } from'../../store/review'
import { getOneProduct } from '../../store/product';
import EditReviewForm from './EditReviewForm';
import './Reviews.css'

export default function Reviews({ productId }) {
    const dispatch = useDispatch()

    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [showEditModal, setShowEditModal] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [editRevId, setEditRevId] = useState("")
    const [isLoaded, setIsLoaded] = useState(false);

    const userId = useSelector(state => state.session.user?.id)
    const allReviewsObj = useSelector(state => state.review?.reviews)

    const allReviewsArray = Object.values(allReviewsObj)
    const productReviews = allReviewsArray.filter(review => review.productId === +productId)

    useEffect(() => {
        dispatch(getAllReviews()).then(() => setIsLoaded(true)) 
    }, [dispatch, isLoaded])

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
          dispatch(getOneProduct(+productId)).then(() => setIsLoaded(!isLoaded))
          setShowAddModal(false)
        }
      }

      const deleteReview = (e) => {
        e.preventDefault()
        let deletedReview = dispatch(deleteReviewById(Number(e.target.id)))

        if(deletedReview) {
            dispatch(getOneProduct(+productId)).then(() => setIsLoaded(!isLoaded))
        }
      }

      const openAddReviewForm = (e) => {
          e.preventDefault()
          setShowAddModal(true)
    }

      const openEditReviewForm = (e) => {
          e.preventDefault()
          setEditRevId(e.target.value)
          setShowEditModal(true)
      }



    return (
        <div className='review-container'>
            {userId && <button onClick={openAddReviewForm} className="rev-write-button"> * Write a review *</button>}
            {showAddModal && (
                <Modal onClose={() => setShowAddModal(false)}>
                    <div className='review-form'>
                        <h3 className="review-title">Add a Review</h3>
                        <form>
                            <div className='rev-input-container'>
                                <label><span style={{color:"red"}}>*</span>Select a rating:
                                    <select
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    >
                                        <option value='' disabled>Select</option>
                                        <option value={Number(5)}>5</option>
                                        <option value={Number(4)}>4</option>
                                        <option value={Number(3)}>3</option>
                                        <option value={Number(2)}>2</option>
                                        <option value={Number(1)}>1</option>
                                    </select>
                                </label>
                                <label>Add a comment (Optional): </label>
                                <textarea
                                className="rev-textarea"
                                placeholder='Add a comment...'
                                autoComplete="off"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                />
                                <button onClick={addReview} type="submit" disabled={!rating} className="rev-submit">Add Review</button>
                            </div>
                        </form>
                    </div>
                </Modal>)}
            <div className='reviews-header'>Reviews ({productReviews?.length})</div>
            <div className='reviews-list'>
                {productReviews.length > 0 && productReviews.map((review, idx) => (
                    <div key={idx} className="reviews-content">
                        <div className="rev-user-name-date">
                            <span><i className="fas fa-user-circle review-user"></i></span>
                            <span>{review.user_name}</span>
                            <span className="date">{review.createdAt.slice(5, 17)}</span>
                        </div>
                        <div className="rev-comment-container">
                        <div>
                            {Array(review.rating).fill(
                                <span><i className="fas fa-star fa-xs"></i></span>).map((star, idx) => <span key={idx}>{star}</span>)}
                        </div>
                            {review.comment}
                        {review.userId === userId &&
                            <div className="rev-button-container">
                                <button onClick={openEditReviewForm} value={review.id}>Edit</button>
                                <button onClick={deleteReview} id={review.id}>Delete</button>
                            </div>}
                        </div>
                  </div>
                ))}
                {showEditModal && (
                    <Modal onClose={() => setShowEditModal(false)}>
                        <EditReviewForm reviewId={editRevId} productId={productId} setShowEditModal={setShowEditModal}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}
