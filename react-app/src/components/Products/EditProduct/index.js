import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { getAllCategories } from '../../../store/category';
import { getOneProduct, updateOneProduct } from '../../../store/product';
import '../NewProduct/NewProduct.css'

function EditProduct() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user);

    const { id } = useParams();
    const productId = +id;
    const product = useSelector(state => state.product.products[productId]);
    const userId = sessionUser?.id;

    const categoriesObj = useSelector(state => state?.category?.categories)
    const categoriesArr = Object.values(categoriesObj)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product_to_update = {
            id: product.id,
            title,
            description,
            imageUrl,
            price,
            quantity,
            categoryId,
            userId,
        }
        const data = await dispatch(updateOneProduct(product_to_update, productId));
        if (data) {
            setErrors(data);
        } else {
            setErrors([])
            history.push(`/products/${productId}`)
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/products')
    }

    useEffect(() => {
        if (!sessionUser) {
            history.push('/login')
        }
    }, [sessionUser, history])

    // useEffect(() => {
    //     if (product && (!title)) {
    //         setTitle(product.title)
    //         setDescription(product.description)
    //         setImageUrl(product.imageUrl)
    //         setPrice(product.price)
    //         setQuantity(product.quantity)
    //         setCategoryId(product.categoryId)
    //     }
    //   }, [product, title])

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getOneProduct(productId))
    }, [dispatch, productId]);

    const [title, setTitle] = useState(product?.title || "");
    const [description, setDescription] = useState(product?.description || "");
    const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");
    const [price, setPrice] = useState(product?.price || "");
    const [quantity, setQuantity] = useState(product?.quantity || "");
    const [categoryId, setCategoryId] = useState(product?.categoryId || "");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (product){
            setTitle(product.title)
            setDescription(product.description)
            setImageUrl(product.imageUrl)
            setPrice(product.price)
            setQuantity(product.quantity)
            setCategoryId(product.categoryId)
        }
    }, [product])

    return (
        <div id="new-product-container">
            <form className='new-product-form' onSubmit={handleSubmit}>
                <div className="add-form-title">Update Your Product</div>
                <div className="add-input-container">
                    {errors.length > 0 && <ul className="errors">
                        {errors.map((error, idx) => <li className="error" key={idx}>{error}</li>)}
                    </ul>}
                    <div className='form_content'>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder='Title'
                            autoComplete="off"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='form_content'>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            min="1"
                            name="price"
                            autoComplete="off"
                            placeholder='Price'
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className='form_content'>
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            min="1"
                            name="quantity"
                            autoComplete="off"
                            placeholder='Quantity'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className='form_content'>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            autoComplete="off"
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='form_content'>
                        <label htmlFor="Category">Category</label>
                        <select
                            required
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option value=''>Select a category</option>
                            {categoriesArr.map((category) => (
                                <option key={category?.id} value={category?.id}>{category?.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form_content'>
                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="url"
                            name="imageUrl"
                            autoComplete="off"
                            placeholder='Image Url'
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className="product-buttons">
                        <button type="submit" className="add-product-button">Save Changes</button>
                        <button className="add-product-button cancel" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default EditProduct
