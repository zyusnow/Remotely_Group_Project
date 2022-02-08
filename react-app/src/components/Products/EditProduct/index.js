import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../../store/product';


function EditProduct() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user);

    const {id} = useParams();
    const productId = +id;
    const product = useSelector(state => state.product.products[productId]);
    console.log("edit",product)
    const userId = sessionUser?.id;

    const [title, setTitle] = useState(product?.title);
    const [description, setDescription] = useState(product?.description);
    const [imageUrl, setImageUrl] = useState(product?.imageUrl);
    const [price, setPrice] = useState(product?.price);
    const [quantity, setQuantity] = useState(product?.quantity);
    const [categoryId, setCategoryId] = useState(product?.categoryId);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product_to_update = {
            title,
            description,
            imageUrl,
            price,
            quantity,
            categoryId,
            userId,
          }
        }


    useEffect(() => {
        if (!sessionUser) {
          history.push('/login')
        }
      }, [sessionUser])

      useEffect(() => {
        dispatch(getOneProduct(productId));
    }, [dispatch],productId);


    return (
        <>
            <h2>I'm edit</h2>
        </>
    )
}


export default EditProduct
