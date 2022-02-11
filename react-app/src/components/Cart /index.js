import { useEffect, /* useState */} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { loadCart, deleteFromCart } from '../../store/cart'
import {getAllProducts} from '../../store/product'
import './Cart.css'



function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartProducts = useSelector((state) => state.carts?.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart(id));
  }, [dispatch, id]);

  if (cartProducts){
    return <CartShow cartProducts={cartProducts} id={id}/>;
  }
  else{
    return (<></>);
  }

}

function CartShow(params){
  const cartProducts = params.cartProducts
  const id = params.id
  const dispatch = useDispatch();

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    dispatch(loadCart(id));
  }
  if (cartProducts.length === 0){
    return (
    <>
      <h1>You have no items in your cart.</h1>
    </>
    )
  }
  else{
    return (
      <>
        <h1>My Cart</h1>
        <div>
          <ul className="cartItems">
            {cartProducts?.map((product) => {
                return (
                  <>
                    <li key={product.productImg}>
                      <img alt={product.productTitle} src={product.productImageUrl}  className="cartImage"/>
                    </li>
                    <li key={product.productPrice} className="cartItemPrice">
                      {product.productPrice}
                    </li>
                    <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>
                  </>
                );
              }
            )}
          </ul>
        </div>
      </>
    );

  }
}

export default CartPage;

// function CartPage() {
//   const id = useSelector((state) => state.session?.user.id);
//   const cartItemsArray = useSelector((state) => state.carts?.cart);
//   const products = useSelector((state) => state.product?.products )
//   // const user = useSelector((state) => state.session?.user)
//   // const [cart, setCart] = useState({});
//   // const [isLoaded, setIsLoaded] = useState(false);
//   const dispatch = useDispatch();

//   // const productIds = cartItemsArray?.map(cartItem => {
//   //  return [cartItem.productId, cartItem.quantity, cartItem.id];
//   // })

//   // const cartProducts = productIds?.map(productId => {
//   //   const cartItem = products[productId[0]];
//   //   if (cartItem) {
//   //     cartItem.quantity = productId[1];
//   //     cartItem.cartId = productId[2];
//   //   }
//   //   return cartItem;
//   // })

//   useEffect(() => {
//     dispatch(getAllProducts())
//     dispatch(loadCart(id));
//   }, [dispatch, id]);


//   const handleDelete = (cartId) => {
//     cartId = +cartId;
//     dispatch(deleteFromCart(cartId));
//     dispatch(loadCart(id));
//   }

//   return (
//     <>
//       <h1>My Cart</h1>

//       <div>
//         <ul className="cartItems">
//           { (!cartItemsArray || !cartItemsArray.length) ?
//             <h1>You have no items in your cart.</h1>
//           : cartItemsArray?.map((product) => {
//               return (
//                 <>
//                   <li key={product.productImg}>
//                     <img alt={product.productTitle} src={product.productImageUrl}  className="cartImage"/>
//                   </li>
//                   <li key={product.productPrice} className="cartItemPrice">
//                     {product.productPrice}
//                   </li>
//                   <li><button id={product.id} onClick={e => handleDelete(e.target.id)}>Delete</button></li>
//                 </>
//               );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default CartPage;
