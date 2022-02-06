import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SignupForm from '../Modals/SignupFormModal/SignupForm';

const SignupPage = () => {
  const user = useSelector(state => state.session.user);
  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Modal>
        <SignupForm />
      </Modal>
    </>
  );
};

export default SignupPage;
