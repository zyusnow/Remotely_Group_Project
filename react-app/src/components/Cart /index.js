import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart, deleteFromCart, clearCartItems } from "../../store/cart";
import { Link, useHistory } from "react-router-dom";
import AddRemoveItem from "./Add_Remove_Item";
import "./Cart.css";

function CartPage() {
  const id = useSelector((state) => state.session?.user.id);
  const cartItemsArray = useSelector((state) => state.carts?.cart);
  const [isLoaded, setIsLoaded] = useState(false);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadCart(id))
      .then(() =>
        setTotal(
          !cartItemsArray
            ? null
            : cartItemsArray.reduce((accum, curr) => {
                return accum + curr.productPrice * curr.quantity;
              }, 0)
        )
      )
      .then(() => setIsLoaded(true));
  }, [dispatch, isLoaded, id, total]);

  const handleDelete = (cartId) => {
    cartId = +cartId;
    dispatch(deleteFromCart(cartId));
    setIsLoaded(!isLoaded);
    dispatch(loadCart(id));
  };

  const handleCheckout = (cartId) => {
    dispatch(clearCartItems(id));
    setIsLoaded(!isLoaded);
    dispatch(loadCart(id));
    history.push("/checkout");
  };

  return !isLoaded ? null : (
    <>
      <div className="continue_shopping">
        <Link to="/products">Continue Shopping</Link>
      </div>
      <div>
        <h1 className="cart_title">Shopping Cart</h1>
      </div>
      <div className="cart_container">
        <div className="cart_details">
          <ul className="cart_items">
            {!cartItemsArray || !cartItemsArray.length ? (
              <h1 className="no_items">You have no items in your cart.</h1>
            ) : (
              cartItemsArray?.map((product) => {
                return (
                  <div key={product.id} className="single_item">
                    <li>{product.productTitle}</li>
                    <Link to={`/products/${product.productId}`}>
                      <li key={product.productImg}>
                        <img
                          alt={product.productTitle}
                          src={product.productImageUrl}
                          className="cart_image"
                        />
                      </li>
                    </Link>
                    <AddRemoveItem
                      productId={product.id}
                      cartId={id}
                      quantity={product.quantity}
                      setTotal={setTotal}
                    />
                    <li>
                      <button
                        id={product.id}
                        onClick={(e) => handleDelete(e.target.id)}
                      >
                        Delete
                        {/* <i className="fa-solid fa-x"></i> */}
                      </button>
                    </li>
                  </div>
                );
              })
            )}
          </ul>
        </div>

        <div className="total_div">
          <div>
            <h2 className="total_div_header">Order Summary</h2>
          </div>
          {!cartItemsArray || !cartItemsArray.length
            ? null
            : cartItemsArray?.map((product) => {
                return (
                  <div key={product.id}>
                    <ul className="item_list">
                      <li
                        key={product.productTitle}
                        className="cart_item_label"
                        id="title"
                      >
                        {product.productTitle}
                      </li>
                      <li
                        key={product.productCategory}
                        className="cart_item_label"
                        id="category"
                      >
                        {product.productCategory}
                      </li>
                      <li
                        key={product.quantity}
                        className="cart_item_label"
                        id="quantity"
                      >
                        Quantity: {product.quantity}
                      </li>
                      <li
                        key={product.productPrice}
                        className="cart_item_label"
                        id="item_price"
                      >
                        Price: ${product.productPrice}
                      </li>
                    </ul>
                  </div>
                );
              })}
          <div className="total_div_footer">
            {!total ? null : (
              <>
                <div className="divider" />
                <div className="total_price">
                  Total Price: ${(Math.round(total * 100) / 100).toFixed(2)}
                </div>
                <div className="checkout_container">
                  <button className="checkout_btn" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
