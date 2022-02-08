import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOneCategory } from '../../store/category';
import '../Products/AllProducts/Products.css'


export default function Categories() {
    const dispatch = useDispatch();
    const { categoryName } = useParams();
    const category = useSelector(state => state.category.categories[categoryName])
    const productArr = useSelector(state => state.category.categories[categoryName].products)
    // const productArr = category.products

    useEffect(() => {
        dispatch(getOneCategory(categoryName))
    }, [dispatch])

    return (
        <>
          <div className='category_title'>{category.name}</div>
             <div className='products_container'>
                 {productArr?.map(product => (
                    <div className='one_product_container' key={product?.id}>
                        <div className='img_container'>
                                <img className="img" src={product?.imageUrl}></img>
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






//     const productsObj = useSelector(state => state?.product?.products)
//     const productsArr = Object.values(productsObj)

//     useEffect(() => {
//         dispatch(getAllProducts())
//     }, [dispatch])

//     return (
//         <>
//             <div className='category_title'>Find all products</div>
//             <div className='products_container'>
//                 {productsArr?.map(product => (
//                     <div className='one_product_container' key={product?.id}>
//                         <div className='img_container'>
//                                 <img className="img" src={product?.imageUrl} alt={product?.category_name}></img>
//                         </div>
//                         <div className='card_content'>
//                             <Link className='product_title' to={`/products/${product.id}`}>{product?.title}</Link>
//                             <div className='product_price'>${product?.price}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )

// }
