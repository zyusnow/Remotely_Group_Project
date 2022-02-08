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


    useEffect(() => {
        if (product && (!title)) {
            setUsername(product.user_name)
            setTitle(product.title)
            setCategoryName(product.category_name)
            setPrice(product.price)
            setDescription(product.description)
            setImageUrl(product.imageUrl)
        }
      }, [product])

    const [username, setUsername] = useState(product?.user_name)
    const [title, setTitle] = useState(product?.title)
    const [categoryName, setCategoryName] = useState(product?.category_name)
    const [price, setPrice] = useState(product?.price)
    const [description, setDescription] = useState(product?.description)
    const [imageUrl, setImageUrl] = useState(product?.imageUrl)

    return (
        <>
            <div className='product_img_container'>
                <img className="img" src={imageUrl} alt="product"></img>
            </div>
            <div className='product_detail_container'>
                <div>{username}</div>
                <div>{categoryName}</div>
                <div>{title}</div>
                <div>${price}</div>
                <div>{description}</div>
            </div>
            <button>Add to Cart</button>
        </>
    )
}
