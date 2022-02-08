import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteOneProduct, getOneProduct } from '../../../store/product';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = +id;
    const history = useHistory();
    const product = useSelector(state => state.product.products[productId])
    const sessionUser = useSelector(state => state.session.user);
    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId])

    const handleDelete = e =>{
        e.preventDefault();
        const deleted_product = dispatch(deleteOneProduct(productId))
        if (deleted_product) {
            history.push('/products')
        }
    }

    const handleUpdate = e => {
            e.preventDefault();
            history.push(`/products/${productId}/edit`);
          }
    

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
            {sessionUser?.id===product?.userId &&
              <>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleUpdate}>Edit</button>
              </>}

        </>
    )
}
