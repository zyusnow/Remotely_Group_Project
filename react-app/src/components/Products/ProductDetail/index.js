import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../../store/product';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = +id;

    const product = useSelector(state => state.product.products[productId])
    
    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId])

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
