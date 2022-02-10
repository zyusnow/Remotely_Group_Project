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
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const products = useSelector((state) => state.product?.products )
  // const user = useSelector((state) => state.session?.user)
  // const [cart, setCart] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  // const productIds = cartItemsArray?.map(cartItem => {
  //  return [cartItem.productId, cartItem.quantity, cartItem.id];
  // })

  // const cartProducts = productIds?.map(productId => {
  //   const cartItem = products[productId[0]];
  //   if (cartItem) {
  //     cartItem.quantity = productId[1];
  //     cartItem.cartId = productId[2];
  //   }
  //   return cartItem;
  // })


  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(loadCart(id)).then(setIsLoaded(true));
  }, [dispatch, id]);


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
                <>
                  <li key={product.productImg}>
                    <img alt={product.productTitle} src={product.productImageUrl}  className="cartImage"/>
                  </li>
                  <li key={product.productPrice} className="cartItemPrice">
                    {product.productPrice}
                  </li>
                  <AddRemoveItem productId={product.id} cartId={id} quantity={product.quantity} />
                  <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>

                </>
              );
          })}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
