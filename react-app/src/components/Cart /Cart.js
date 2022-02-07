import {useSelector, useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import loadCart from '../../store/cart'

function CartPage() {
const { cartId } = useParams();
const dispatch = useDispatch();
const [cart, setCart] = useState({})
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
 dispatch(loadCart(cartId)).then((cart) => setCart(cart)).then(() => setIsLoaded(true))
}, [dispatch])

  return (
    <>
    <h1>Cart</h1>
    <p>This is just fluff {cartId}</p>
    </>
  )
}

export default CartPage;
