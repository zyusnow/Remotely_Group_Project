import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link} from 'react-router-dom';
import { deleteOneProduct, getOneProduct } from '../../../store/product';
import { addToCart } from '../../../store/cart';
// import PageNotFound from '../../PageNotFound';
import Reviews from '../../Reviews';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = +id;
    const history = useHistory();

    const [isLoaded, setIsLoaded] = useState(false);
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
          .then(() => setIsLoaded(true));
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

    if (product && isLoaded) {
      return (
        <>
          <div className="product_img_container">
            <Link to={`/products/${productId}`}>
              <img
                className="img"
                src={product?.imageUrl}
                alt={product?.category_name}
              />
            </Link>
          </div>
          <div className="product_detail_container">
            <div>{product?.user_name}</div>
            <div>{product?.category_name}</div>
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
            <div>{product?.title}</div>
            <div>${product?.price}</div>
            <div>{product?.description}</div>
          </div>

          <button onClick={addItemToCart}>Add to Cart</button>
          {sessionUser?.id === product?.userId && (
            <>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleUpdate}>Edit</button>
            </>
          )}
          <Reviews productId={product?.id} />
        </>
      );
    } else {
      return <></>
    }
}
