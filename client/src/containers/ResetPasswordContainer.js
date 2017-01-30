import { connect } from 'react-redux';
import { resetPasswordFromToken } from '../actions/userActions';
import { userIsBeingFetched, isLoggedIn } from '../reducers/userReducer';
import ResetPassword from '../components/ResetPassword';

const mapStateToProps = (state) => {
  return {
    //Maybe log user out if currently logged in.
    //isLoggedIn: isLoggedIn(state)
  };
};

const mapDispatchToProps = {
  onSubmit: resetPasswordFromToken
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
