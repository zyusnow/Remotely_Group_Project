import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { addOneProduct } from '../../../store/product';

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
    const sessionUser = useSelector(state => state.session.user)

    const addProductSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId: sessionUser.id,
            title,
            description,
            imageUrl,
            price,
            quantity,
            categoryId
        }

        return dispatch(addOneProduct(payload))
            .catch(async (res) => {
                const data = await res.json()
                if (data.errors) setErrors(data.errors)
            })
            .then((res) => res && history.push("/"))
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
          <input 
            type="text"
            name="description"
            autoComplete="off"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="Category">Category</label>
          <select/>

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
