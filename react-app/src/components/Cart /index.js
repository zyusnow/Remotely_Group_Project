import { useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'
import './Cart.css'

function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const products = useSelector((state) => state.product?.products )
  const user = useSelector((state) => state.session?.user)
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(cartItemsArray);
  console.log(products)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(loadCart(id));
  }, [dispatch]);

  const productIds = cartItemsArray?.map(cartItem => {
   return cartItem.productId
  })
 console.log(productIds)
  const cartProducts = productIds?.map(productId => {
    return products[productId]
  })


  return (
    <>
      <h1>My Cart</h1>

      <div>
        <ul className="cartItems">
          {cartProducts?.map((product) => {
            if (product) {
              return (
                <>
                  <li key={product.img} className="cartImage">
                    <img src={product.imageUrl} />
                  </li>
                  <li key={product.price} className="cartItemPrice">
                    {product.price}
                  </li>
                </>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
