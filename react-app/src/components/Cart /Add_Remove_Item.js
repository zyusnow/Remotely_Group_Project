import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addToCart, deleteFromCart, editCart} from '../../store/cart'

const options = [ 1, 2, 3, 4, 5]
function AddRemoveItem({productId, cartId, quantity, setTotal}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [productQuantity, setProductQuantity] = useState(quantity)

  const addItemToCart =(e) => {
    e.preventDefault()
    const quantity = productQuantity
      const cartItem  = {
          cartId,
          productId,
          quantity
      }
      dispatch(editCart(cartItem))
      setTotal(null)
      history.push('/cart')
    }

  return (
    <>
      <div className="item_opt_container">
        <select
          className="select_quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <button onClick={addItemToCart}>Edit Quantity</button>
      </div>
    </>
  );
}

export default AddRemoveItem;
