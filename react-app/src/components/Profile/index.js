import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { loadUser } from '../../store/user'

function ProfilePage(){
 const [user, setUser] = useState({});
 const [isLoaded, setIsLoaded] = useState(false);
 const sessionUser = useSelector(state => state.session.user);
 const products = useSelector(state => state.user?.user.products)
 const id = sessionUser.id;
const dispatch = useDispatch();
console.log(id)
console.log(products)
 useEffect(() => {
  dispatch(loadUser(id)).then(user => setUser(user)).then(() => setIsLoaded(true));
 }, [id]);

 if (!isLoaded || !sessionUser) {
   return null;
 }

 return (
   <>
     <div id="main">
       <div className="profile_banner">
         <h1>My Profile</h1>
         <div>
           <div className="profile_picture">
             <img
               alt="profile_pic"
               src="https://res.cloudinary.com/bigtechnik/image/upload/v1644534295/Remotely/images_bvdorh.png"
             />
           </div>
           <ul>
             <li>{sessionUser.username}</li>
             <li>{sessionUser.email}</li>
             <li><Link to='/'>Edit My Profile</Link></li>
           </ul>
         </div>
       </div>

       <div className="my_products_container">
         <h2>My Products</h2>
         <ul className="my_products_info">
           {products?.map((product) => {
             if (product) {
               return (
                 <>
                   <li className="product_img" key={product.imageUrl}>
                     <img src={product.imageUrl} />
                   </li>
                   <li>{product.title}</li>
                   <li><Link to={`/products/${product.id}/edit`}>Edit</Link></li>
                 </>
               );
             }
           })}
         </ul>
       </div>
     </div>
   </>
 );

}

export default ProfilePage;
