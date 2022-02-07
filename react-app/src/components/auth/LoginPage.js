import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import LoginForm from '../Modals/LoginFormModal/LoginForm';

const LoginPage = () => {
  const user = useSelector(state => state.session.user);
  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Modal>
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginPage;
