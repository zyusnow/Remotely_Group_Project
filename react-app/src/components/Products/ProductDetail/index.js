import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getOneProduct } from '../../../store/product';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const productId = +id;

    const productObj = useSelector(state => state?.product?.products)
    const product = productObj[productId]


    const [title, setTitle] = useState(product?.title);


    console.log(product)
    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch])


    useEffect(() => {
        if (product && (!product.title)) {
            setTitle(product.title)
        }
      }, [product])


    return (
        <>
            <div className='product_img_container'>
                <img className="img" src={product?.imageUrl}></img>
            </div>
            <div className='product_detail_container'>
                <div>{product?.user_name}</div>
                <div>{product?.category_name}</div>
                <div>{product?.title}</div>
                <div>${product?.price}</div>
                <div>{product?.description}</div>
            </div>
            <button>Add to Cart</button>
        </>
    )
}
