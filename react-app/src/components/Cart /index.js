import { useEffect,  useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart, deleteFromCart, addToCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'
import AddRemoveItem from './Add_Remove_Item';
import './Cart.css'

const options = [0, 1, 2, 3]

function CartPage() {
  const [productQuantity, setProductQuantity] = useState(0);
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsObj = useSelector((state) => state.carts?.cartItems);
  const cartItemsArray = Object.values(cartItemsObj)
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadCart(id));
  }, [dispatch]);

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    dispatch(loadCart(id));
  }

  return (

    <>
      <h1>My Cart</h1>
      <div>
        <ul className="cartItems">
          { (!cartItemsArray || !cartItemsArray.length) ?
            <h1>You have no items in your cart.</h1>
          : cartItemsArray?.map((product) => {
              return (
                <div key={product.id} >
                  <li>
                    <img alt={product.productTitle} src={product.productImageUrl}  className="cartImage"/>
                  </li>
                  <li className="cartItemPrice">
                    {product.productPrice}
                  </li>
                  <li>
                    <AddRemoveItem productId={product.id} cartId={id} quantity={product.quantity} />
                  </li>
                  <li>
                    <button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button>
                  </li>

                </div>
              );
          })}
          {}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
