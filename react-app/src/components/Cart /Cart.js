import {useSelector, useEffect} from 'react';

function CartPage() {

  const sessionUser = useSelector(state => state.session.user);
  const cart = useSelector(state => state.cart.cart);
  
  return (
    <>
    <h1>Cart</h1>
    </>
  )
}

export default CartPage;
