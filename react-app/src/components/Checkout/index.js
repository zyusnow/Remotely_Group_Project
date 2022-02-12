import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './Checkout.css';
function Checkout() {
  const user = useSelector((state) => state.session?.user);


  return (
    <div className="checkdout_container">

        <div className="congrats">
        Congratulations, {user.username}! We have received your order.
        </div>
        <div>You will receive an email at {user.email} to confirm.</div>

      <div><Link to="/products">Continue Shopping</Link></div>
    </div>
  )
}

export default Checkout;
