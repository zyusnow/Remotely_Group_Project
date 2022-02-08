import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../store/product';
import './Products.css'



export default function AllProducts() {
    const dispatch = useDispatch();
    const productsObj = useSelector(state => state?.product?.products)
    const productsArr = Object.values(productsObj)
    console.log("component/products", productsArr)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <>
            <h2>All Products</h2>
            <div className='products_container'>
                {productsArr?.map(product => (
                    <div className='one_product_container' key={product?.id}>
                        <div className='img_container'>
                                <img className="img" src={product?.imageUrl} alt={product?.title}></img>
                        </div>
                        <div className='card_content'>
                            <Link to={`/products/${product.id}`}>{product?.title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}
