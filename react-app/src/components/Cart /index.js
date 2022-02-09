import { useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'

function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const products = useSelector((state) => state.product?.products )
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(cartItemsArray);
  console.log(products)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(loadCart(id));
  }, [dispatch]);

  // const productIds = cartItemsArray?.map(cartItem => {
  //  return cartItem.productId
  // })

  return (
    <>
      <h1>Cart</h1>
      <p>This is just fluff {id}</p>
    </>
  );
}

export default CartPage;
