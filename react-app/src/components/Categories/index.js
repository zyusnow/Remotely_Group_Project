import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllCategories, getOneCategory } from '../../store/category';
import '../Products/AllProducts/Products.css'

export default function Categories() {
    const dispatch = useDispatch();
    const { categoryName } = useParams();
    const category = useSelector(state => state.category?.categories[categoryName])
    const productArr = useSelector(state => state.category?.categories[categoryName]?.products)

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getOneCategory(categoryName))
    }, [dispatch, categoryName])

    return (
        <>
          <div className='category_title'>{category?.name}</div>
             <div className='products_container'>
                 {productArr?.map(product => (
                    <div className='one_product_container' key={product?.id}>
                        <div className='img_container'>
                            <Link to={`/products/${product.id}`}>
                                <img className="img" src={product?.imageUrl} alt={product?.category_name}></img>
                            </Link>
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
