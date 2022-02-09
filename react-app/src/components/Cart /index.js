import { useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../../store/cart'

function CartPage() {
const id = useSelector(state => state.session.user.id);
const cartItems = useSelector(state => state.carts.cart)
const dispatch = useDispatch();
const [cart, setCart] = useState({})
const [isLoaded, setIsLoaded] = useState(false)


useEffect(() => {
  dispatch(loadCart(id))
  }, [dispatch])

  return (
    <>
    <h1>Cart</h1>
    <p>This is just fluff {id}</p>
    
    </>
  )
}

export default CartPage;
