import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { getAllCategories } from '../../../store/category';
import { getOneProduct, updateOneProduct } from '../../../store/product';


function EditProduct() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state?.session?.user);

    const {id} = useParams();
    const productId = +id;
    const product = useSelector(state => state.product.products[productId]);
    const userId = sessionUser?.id;

    const categoriesObj = useSelector(state => state?.category?.categories)
    const categoriesArr = Object.values(categoriesObj)

    const [title, setTitle] = useState(product?.title);
    const [description, setDescription] = useState(product?.description);
    const [imageUrl, setImageUrl] = useState(product?.imageUrl);
    const [price, setPrice] = useState(product?.price);
    const [quantity, setQuantity] = useState(product?.quantity);
    const [categoryId, setCategoryId] = useState(product?.categoryId);
    const [errors, setErrors] = useState([]);

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
            history.push("/products")
          }
        }



    useEffect(() => {
        if (!sessionUser) {
          history.push('/login')
        }
      }, [sessionUser])

      useEffect(() => {
        dispatch(getOneProduct(productId))
        dispatch(getAllCategories())
    }, [dispatch],productId);


    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/products')
    }
    return (
        <div className="new-product-container">
          <form className='new-product-form' onSubmit={handleSubmit}>
            <h1 className="add-form-title">Add Product</h1>
            <div className="add-input-container">
              {errors.length > 0 && <ul className="errors">
                {errors.map((error, idx) => <li className="error" key={idx}>{error}</li>)}
              </ul>}
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
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                autoComplete="off"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="Category">Category</label>
              <select
                required
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value=''>Select</option>
                {categoriesArr.map((category) => (
                  <option key={category?.id} value={category?.id}>{category?.name}</option>
                ))}
              </select>
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                autoComplete="off"
                placeholder='Image Url'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <button type="submit" className="add-product-button">Update Product</button>
              <button className="add-product-button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )
}


export default EditProduct
