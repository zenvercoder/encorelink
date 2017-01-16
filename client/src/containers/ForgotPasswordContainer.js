import { connect } from 'react-redux';
import { loginRequest } from '../actions/userActions';
import { userIsBeingFetched, isLoggedIn } from '../reducers/userReducer';
import ForgotPassword from '../components/ForgotPassword';

const mapStateToProps = (state) => {
  return {
    isFetching: userIsBeingFetched(state),
    isLoggedIn: isLoggedIn(state)
  };
};

const mapDispatchToProps = {
  onSubmit: loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
