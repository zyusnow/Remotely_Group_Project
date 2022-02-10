import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { editUserInfo } from '../../../store/user';

function EditProfile(){
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state?.session?.user);
  const [username, setUsername] = useState(sessionUser?.username);
  const [email, setEmail] = useState(sessionUser?.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedUser = {
      id: sessionUser.id,
      username,
      email,
      password,
    }
    const data = await dispatch(editUserInfo(editedUser));
    if (data) {
      setErrors(data);
    } else {
      setErrors([])
      history.push("/profile")
    }
  }



  useEffect(() => {
    if (!sessionUser) {
      history.push('/login')
    }
  }, [sessionUser, history])

  return(
    <>
      <h1>Edit Profile</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          <label>Email:</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default EditProfile;
