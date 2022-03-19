import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loadUser } from '../../../store/user'
import './Profile.css';
import { deleteOneProduct } from '../../../store/product';


function ProfilePage(){
  const history = useHistory()
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [del, setDel] = useState(false);

  const sessionUser = useSelector(state => state.session?.user);
  const products = useSelector(state => state.user?.user?.products)
  const id = sessionUser.id;

 useEffect(() => {
  dispatch(loadUser(id)).then(user => setUser(user)).then(() => setIsLoaded(true));
 }, [dispatch, id, del]);

 if (!isLoaded || !sessionUser) {
   return null;
 }

  const handleDelete = (e, productId) =>{
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to delete the product?")
    if (confirmed) {
      return dispatch(deleteOneProduct(+productId))
        .then(() => setDel(!del))
    } 
  }

  const handleUpdate = (e, productId) => {
    e.preventDefault();
    history.push(`/products/${productId}/edit`);
  }

 return (
   <>
     <div className="profile_banner">
       <div className="image_container">
         <img
           className="profile_picture"
           alt="profile_pic"
           src="https://res.cloudinary.com/bigtechnik/image/upload/v1644534295/Remotely/images_bvdorh.png"
         />
         <ul>
           <li key={sessionUser.username}>{sessionUser.username}</li>
           <li key={sessionUser.email}>{sessionUser.email}</li>
         </ul>
       </div>
       <div className="profile_right">
         <h3>Good Vibes!</h3>
         <div className="right_text">
           As an introduction to Remotely - we will be providing you with
           motivational quotes on your dashboard! We are committed to not only
           providing useful, popular products for your remote work experience -
           we care about <i>you</i>!
         </div>
         <div className="quote_heading">
           <b>Quote of the Week</b>
         </div>
         <div>
           <i>
             {" "}
             "Never limit yourself because of others’ limited imagination; never
             limit others because of your own limited imagination.”{" "}
           </i>
           <br />
           <div className="quote_origin">–Mae Jemison</div>
         </div>
       </div>
     </div>

     <div className="my_products_container">
       <h2>My Products</h2>
       <div className="products_list_profile">
         <div className="my_products_info">
           {products?.map((product, idx, idx2) => {
            //  if (product) {
               return (
                 <div key={idx}>
                   <div className="product_square">
                   <Link key={idx2} to={`/products/${product.id}`}>
                     <div key={product?.imageUrl}>
                       <img className="product_img" src={product?.imageUrl} alt={product?.title}/>
                     </div>
                     <div  style={{color: "black"}}>{product?.title}</div>
                  </Link>
                     <div key={product?.id}>
                      <div className="product-button-container">
                        <button onClick={(e) => handleUpdate(e, product?.id)}>Update</button>
                        <button onClick={(e) => handleDelete(e, product?.id)}>Delete</button>
                      </div>
                     </div>
                   </div>
                 </div>
               );
            //  }
           })}
         </div>
       </div>
     </div>
   </>
 );

}

export default ProfilePage;
