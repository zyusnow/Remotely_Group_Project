import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUser } from '../../../store/user'
import './Profile.css';

function ProfilePage(){
 const [user, setUser] = useState({});
 const [isLoaded, setIsLoaded] = useState(false);
 const sessionUser = useSelector(state => state.session?.user);
 const products = useSelector(state => state.user?.user?.products)
 const id = sessionUser.id;
const dispatch = useDispatch();

 useEffect(() => {
  dispatch(loadUser(id)).then(user => setUser(user)).then(() => setIsLoaded(true));
 }, [id]);

 if (!isLoaded || !sessionUser) {
   return null;
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
         <p className="right_text">
           As an introduction to Remotely - we will be providing you with
           motivational quotes on your dashboard! We are committed to not only
           providing useful, popular products for your remote work experience -
           we care about <i>you</i>!
         </p>
         <p className="quote_heading">
           <b>Quote of the Week</b>
         </p>
         <p>
           <i>
             {" "}
             "Never limit yourself because of others’ limited imagination; never
             limit others because of your own limited imagination.”{" "}
           </i>
           <br />
           <p className="quote_origin">–Mae Jemison</p>
         </p>
       </div>
     </div>

     <div className="my_products_container">
       <h2>My Products</h2>
       <div className="products_list_profile">
         <div className="my_products_info">
           {products?.map((product) => {
             if (product) {
               return (
                 <>
                   <div className="product_square">
                     <div key={product.imageUrl}>
                       <img className="product_img" src={product.imageUrl} />
                     </div>
                     <div>{product.title}</div>
                     <div key={product.id}>
                       <Link to={`/products/${product.id}/edit`}>Edit</Link>
                     </div>
                   </div>
                 </>
               );
             }
           })}
         </div>
       </div>
     </div>
   </>
 );

}

export default ProfilePage;
