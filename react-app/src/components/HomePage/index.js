import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../store/category';
import { getTopProducts } from '../../store/product';
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();
    const categoriesObj = useSelector(state => state?.category?.categories)
    const categoriesArr = Object.values(categoriesObj)
    const user = useSelector(state => state?.session?.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const productsObj = useSelector(state => state?.product?.products)
    const productsArr = Object.values(productsObj)

    useEffect(() => {
        dispatch(getAllCategories()).then(() => dispatch(getTopProducts())).then(() => setIsLoaded(true));
    }, [dispatch])

    if (!isLoaded) {
      return null
    }

    return (
      <>
        <div className="banner">
          {!user ? (
            <div className="welcome">Shop comfortably, work remotely!</div>
          ) : (
            <div className="welcome">
              Welcome,{" "}
              <Link className="username_link" to="/profile">
                {user.username}
              </Link>
              !
            </div>
          )}
          <div className="categories_container">
            <ul>
              {categoriesArr?.map((category) => (
                <li key={category?.id}>
                  <Link to={`/category/${category.name}`}>
                    <img
                      src={category.category_image}
                      className="round-image"
                      alt=""
                    />
                  </Link>
                  <p>{category.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="products_container1">
          <h2>Featured Products</h2>
          <div className="products_list" id="home">
            {productsArr?.map((product) => (
              <div className="single_product" key={product?.id}>
                <div className="product_image">
                  <Link to={`/products/${product.id}`}>
                    <img
                      className="img"
                      src={product?.imageUrl}
                      alt={product?.category_name}
                    />
                  </Link>
                </div>
                <div className="product_info">
                  <Link
                    className="product_title"
                    to={`/products/${product.id}`}
                  >
                    {product?.title}
                  </Link>
                  <div className="product_price">${product?.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default HomePage;
