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
    dispatch(loadCart(id))
      .then(() => setTotal(!cartItemsArray ? null :
        cartItemsArray
          .reduce((accum, curr) => {
            return accum + (curr.productPrice * curr.quantity);
          }, 0)))
      .then(() => setIsLoaded(true));
  }, [dispatch, isLoaded, id, total]);

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    setIsLoaded(!isLoaded)
    dispatch(loadCart(id));
  }

  return (!isLoaded) ? null : 
    (
      <div className='cart_container'>
        <h1>My Cart</h1>
        <div className='cart_details'>
          <ul className="cart_items">
            { (!cartItemsArray || !cartItemsArray.length) ?
              <h1>You have no items in your cart.</h1>
            : cartItemsArray?.map((product) => {
                return (
                  <div key={product.id} className='single_item'>
                    <li key={product.productImg}>
                      <img alt={product.productTitle} src={product.productImageUrl} className="cart_image"/>
                    </li>
                    <li key={product.productPrice} className="cart_item_price">
                      {product.productPrice}
                    </li>
                    <AddRemoveItem productId={product.id} cartId={id} quantity={product.quantity} setTotal={setTotal}/>
                    <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>
                  </div>
                );
            })}
          </ul>
        </div>
        <div className='total_div'>
          {!total ? null :<h2>
            Total Price: ${(Math.round(total * 100) / 100).toFixed(2)}
          </h2>}
        </div>
      </div>
    );
}

export default CartPage;