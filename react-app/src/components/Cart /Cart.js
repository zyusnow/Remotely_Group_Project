import {useSelector, useEffect} from 'react';

function CartPage() {

  const sessionUser = useSelector(state => state.session.user);
  return (
    <>
    <h1>Cart</h1>
    </>
  )
}

export default CartPage;
