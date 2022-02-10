import { useEffect, useState, /* useState */} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart, deleteFromCart, addToCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'
import './Cart.css'

const options = [0, 1, 2, 3]

function CartPage() {
  const [productQuantity, setProductQuantity] = useState(0);
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(loadCart(id));
  }, [dispatch, id, cartItemsArray, productQuantity]);

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    dispatch(loadCart(id));
  }

  const changeQuantity = e => {
    e.preventDefault()

  }

  const addItemToCart =() => {
    const cartId = id
    const productId = product.id
    const quantity = productQuantity
    const cartItem  = {
        cartId,
        productId,
        quantity
    }
    dispatch(addToCart(cartItem))
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
                  <li>{product.quantity}</li>
                  <button onClick={addItemToCart}>Add to Cart</button>
                  <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>
                  <form>
                    <select onChange={e => setProductQuantity(e.target.value)} value={product.quantity}>
                        {options.map(option => <option>{option}</option>)}
                    </select>
                    <button onClick={changeQuantity}></button>
                  </form>
                </>
              );
          })}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
