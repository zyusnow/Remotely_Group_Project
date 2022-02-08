import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addOneProduct } from '../../../store/product';
import './NewProduct.css'

export default function NewProduct() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const errors = [];
        if (title.length < 2 || !title) errors.push("Please enter a valid title")
        if (title.length > 100) errors.push("Title must be less than 100 characters")
        if (description.length < 2) errors.push("Please enter a valid description")
        if (description.length > 255) errors.push("Description must be less than 255 characters") 
        if (price < 1) errors.push("Price must be at least $1")
        if (quantity < 1) errors.push("Please enter a valid quantity")

        setErrors(errors)
      },[title, description, price, quantity])

    const addProductSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            title,
            description,
            imageUrl,
            price,
            quantity,
            categoryId: 1
        }

        let newProduct = await dispatch(addOneProduct(payload))
        if (newProduct) {
            history.push("/")
        }
    }
  return (
    <div className="new-product-container">
      <form className='new-product-form' onSubmit={addProductSubmit}>
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
          <select onChange={(e) => setCategoryName(e.target.value)}>
              {/* {categoryTypes.map(category => 
                <option key={category.id} id={category.id}>{category}</option> 
                )} */}
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
          <button type="submit" className="add-product-button">Add Product</button>
        </div>
      </form>
    </div>
  )
}
