import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link} from 'react-router-dom';
import { deleteOneProduct, getOneProduct } from '../../../store/product';
import { addToCart } from '../../../store/cart';
// import PageNotFound from '../../PageNotFound';
import Reviews from '../../Reviews';
import './ProductDetail.css'

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = +id;
    const history = useHistory();

    const product = useSelector(state => state.product.products[productId])
    const sessionUser = useSelector(state => state.session.user);
    const allReviewsObj = useSelector(state => state.review.reviews)
    const allReviewsArray = Object.values(allReviewsObj)
    const productReviews = allReviewsArray.filter(review => review.productId === productId)

    const overallRating = productReviews => {
        return productReviews?.reduce(function(prevValue, review){
            return (prevValue + review.rating)
        }, 0)
    }

     let rating = Math.round(
       overallRating(productReviews) / productReviews.length
     );


    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId, productReviews.length])

    const handleDelete = e =>{
        e.preventDefault();
        const deleted_product = dispatch(deleteOneProduct(productId))
        if (deleted_product) {
            history.push('/products')
        }
    }

    const handleUpdate = e => {
            e.preventDefault();
            history.push(`/products/${productId}/edit`);
          }

    const addItemToCart =() => {
      const cartId = sessionUser.id
      const productId = product.id
      const quantity = product.quantity
      const cartItem  = {
          cartId,
          productId,
          quantity
      }
      dispatch(addToCart(cartItem))
      history.push('/cart');
    }

    if (product) {
      return (
        <div className="product-details-page">
          <div className="product-container">
            <div className="product_img_container">
                <img
                  className="product-detail-image"
                  src={product?.imageUrl}
                  alt={product?.category_name}
                  />
            </div>
            <div className="product-detail-container">
              <div><p className="product-det-user">{product?.user_name}</p></div>
              <div><p className="product-det-title">{product?.title}</p></div>
              <div>
                {rating > 0 &&
                  Array(rating)
                    .fill(
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                    )
                    .map((star, idx) => <span key={idx}>{star}</span>)}
              </div>
              <Link className="product-det-category" to={`/category/${product?.category_name}`}>{product?.category_name}</Link>

              <div><p className="product-det-price">${product?.price}</p></div>
              <div><p className="product-det-desc">{product?.description}</p></div>
                <div>
                  <div>
                    {sessionUser &&
                      sessionUser?.id && (
                        <button className="product-det-addCart" onClick={addItemToCart}>Add to Cart</button>
                      )}
                  </div>
              {sessionUser?.id === product?.userId && (
                <div className="product-button-container">
                  <button onClick={handleUpdate}>Update</button>
                  <button onClick={handleDelete}>Delete product</button>
                </div>
              )}
              </div>
            </div>
          </div>
          
          <Reviews productId={product?.id} />
        </div>
      );
    } else {
      return <></>
    }
}
