import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllCategories } from '../../../store/category';
import { addOneProduct } from '../../../store/product';
import './NewProduct.css'


export default function NewProduct() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [errors, setErrors] = useState([])
  const [triedSubmit, setTriedSubmit] = useState(false)

  const categoriesObj = useSelector(state => state?.category?.categories)
  const categoriesArr = Object.values(categoriesObj)

  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector(state => state?.session?.user);


  useEffect(() => {
    if (!sessionUser) {
      history.push('/login')
    }
  }, [sessionUser, history])

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])


  useEffect(() => {
    const errors = [];
    if (title.length < 2 || !title) errors.push("Please enter a valid title")
    if (title.length > 100) errors.push("Title must be less than 100 characters")
    if (description.length < 2) errors.push("Please enter a valid description")
    if (description.length > 255) errors.push("Description must be less than 255 characters")
    if (price < 1) errors.push("Price must be at least $1")
    if (quantity < 1) errors.push("Please enter a valid quantity")
    if (!imageUrl) errors.push('Please provide an image URL.')

    setErrors(errors)
  }, [title, description, price, quantity])

  const addProductSubmit = async (e) => {
    e.preventDefault()

    if (errors.length) {
      setTriedSubmit(true);
      return;
    }
    const payload = {
      title,
      description,
      imageUrl,
      price,
      quantity,
      categoryId
    }

    let newProduct = await dispatch(addOneProduct(payload))
    if (newProduct) {
      history.push("/products")
    }
  }

  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/products')
}

  return (
    <div id="new-product-container">
      <form className='new-product-form' onSubmit={addProductSubmit}>
        <div className="add-form-title">Sell Your Product</div>
        <div className="add-input-container">
          {errors.length > 0 && <ul className={triedSubmit ? "errors urgent-errors" : "errors"}>
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
          <div>
            <button type="submit" className="add-product-button">Add Product</button>
            <button className="add-product-button cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form >
    </div >
  )
}
