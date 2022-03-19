import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import LoginForm from '../Modals/LoginFormModal/LoginForm';

const LoginPage = () => {
  const history = useHistory()
  const user = useSelector(state => state.session.user);
  if (user) {
    return <Redirect to='/' />;
  }

  const closeModal = (e) => {
    e.preventDefault()
    history.push("/")
  }

  return (
    <>
      <Modal>
        <LoginForm />
        <button className="button_submit button_secondary" onClick={closeModal}>Cancel</button>
      </Modal>
    </>
  );
};

export default LoginPage;
