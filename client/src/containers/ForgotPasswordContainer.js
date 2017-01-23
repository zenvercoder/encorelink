import { connect } from 'react-redux';
import { sendPasswordReset } from '../actions/userActions';
import { userIsBeingFetched, isLoggedIn } from '../reducers/userReducer';
import ForgotPassword from '../components/ForgotPassword';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {
  onSubmit: sendPasswordReset
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
