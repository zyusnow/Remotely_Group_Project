import { useEffect,  useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart, deleteFromCart } from '../../store/cart'
import AddRemoveItem from './Add_Remove_Item';
import './Cart.css'

function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart?.cartItems);
  const [isLoaded, setIsLoaded] = useState(false);
  const total = useSelector((state) => state.carts?.cart?.total);
  const [cartTotal, setCartTotal] = useState(total);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadCart(id))
    .then(() => setIsLoaded(true))

  }, [dispatch, isLoaded, id, total]);

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    setIsLoaded(false)
    dispatch(loadCart(id));
  }


  return !isLoaded ? null : (
    <>
      <div className="cart-container">
        <h1>My Cart</h1>
        <div>
          <button>Clear Cart</button>
          <ul className="cartItems">
            {!cartItemsArray || !cartItemsArray.length ? (
              <h1>You have no items in your cart.</h1>
            ) : (
              cartItemsArray?.map((product) => {
                return (
                  <div key={product.id}>
                    <li key={product.productImg}>
                      <img
                        alt={product.productTitle}
                        src={product.productImageUrl}
                        className="cartImage"
                      />
                    </li>
                    <li key={product.productPrice} className="cartItemPrice">
                      {product.productPrice}
                    </li>
                    <AddRemoveItem
                      productId={product.id}
                      cartId={id}
                      quantity={product.quantity}
                      setTotal={setCartTotal}
                    />
                    <li>
                      <button
                        id={product.id}
                        onClick={(e) => handleDelete(e.target.id)}
                      >
                        Delete
                      </button>
                    </li>
                  </div>
                );
              })
            )}
          </ul>
          <div className="cart_total">
            <h2 className="total">Total:  ${total}</h2>
          </div>
          {/* {!total ? null :<h2>
            Total Price: ${(Math.round(total * 100) / 100).toFixed(2)}
          </h2>} */}
        </div>
      </div>
    </>
  );
}

export default CartPage;
