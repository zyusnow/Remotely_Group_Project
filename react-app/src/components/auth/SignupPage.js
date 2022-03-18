import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SignupForm from '../Modals/SignupFormModal/SignupForm';

const SignupPage = () => {
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
        <SignupForm />
        <button className="button_submit button_secondary" onClick={closeModal}>Cancel</button>
      </Modal>
    </>
  );
};

export default SignupPage;
