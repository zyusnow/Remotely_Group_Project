import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../store/product';
import './Products.css'


export default function AllProducts() {
    const dispatch = useDispatch();

    const productsObj = useSelector(state => state?.product?.products)
    const productsArr = Object.values(productsObj)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <>
            <div className='category_title'>Find all products</div>
            <div className='products_container'>
                {productsArr?.map(product => (
                    <div className='one_product_container' key={product?.id}>
                        <div className='img_container'>
                        <img className="img" src={product?.id} alt={product?.category_name}></img>
                        </div>
                        <div className='card_content'>
                            <Link className='product_title' to={`/products/${product.id}`}>{product?.title}</Link>
                            <div className='product_price'>${product?.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}