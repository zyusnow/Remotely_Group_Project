import { useEffect,  useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart, deleteFromCart, addToCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'
import AddRemoveItem from './Add_Remove_Item';
import './Cart.css'

function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const [isLoaded, setIsLoaded] = useState(false);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadCart(id));
    setIsLoaded(true);
  }, [dispatch, isLoaded, id]);

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    setIsLoaded(false)
    dispatch(loadCart(id));
  }

  return (!isLoaded) ? null : 
    (
      <>
        <h1>My Cart</h1>
        <div>
          <ul className="cartItems">
            { (!cartItemsArray || !cartItemsArray.length) ?
              <h1>You have no items in your cart.</h1>
            : cartItemsArray?.map((product) => {
                return (
                  <div key={product.id}>
                    <li key={product.productImg}>
                      <img alt={product.productTitle} src={product.productImageUrl}  className="cartImage"/>
                    </li>
                    <li key={product.productPrice} className="cartItemPrice">
                      {product.productPrice}
                    </li>
                    <AddRemoveItem productId={product.id} cartId={id} quantity={product.quantity} />
                    <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>
                  </div>
                );
            })}
          </ul>
          <h2>
            Total Price: {!cartItemsArray ? 0 : cartItemsArray.reduce((accum, curr) => {
      return accum + (curr.productPrice * curr.quantity);
    }, 0)}$
          </h2>
        </div>
      </>
    );
}

export default CartPage;
