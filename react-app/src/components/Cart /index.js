import { useEffect, /* useState */} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart, deleteFromCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'
import './Cart.css'

function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(loadCart(id));
  }, [dispatch, id, cartItemsArray]);
  

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    dispatch(loadCart(id));
  }

  if (!cartItemsArray) {
    return <></>
  }
  return (
    <>
      <h1>My Cart</h1>
      <div>
        <ul className="cartItems">
          { (!cartItemsArray.length) ? 
            <h1>You have no items in your cart.</h1>
          : cartItemsArray?.map((product) => {
              return (
                <>
                  <li key={product.productImg}>
                    <img alt={product.productTitle} src={product.productImageUrl}  className="cartImage"/>
                  </li>
                  <li key={product.productPrice} className="cartItemPrice">
                    {product.productPrice}
                  </li>
                  <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>
                </>
              );
          })}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
