import { connect } from 'react-redux';
import { resetPasswordFromToken } from '../actions/userActions';
import { userIsBeingFetched, isLoggedIn } from '../reducers/userReducer';
import ResetPassword from '../components/ResetPassword';
import { withRouter } from 'react-router';
import React from 'react';



const mapStateToProps = (state, ownProps) => {
 
};

const ResetPasswordContainer = (props) => {
    function onResetPassword(formData) {
      props.resetPasswordFromToken(formData.password, props.location.query.id, props.location.query.token);
    }

     return (
       <ResetPassword onSubmit={onResetPassword}/>
       );
  };


const mapDispatchToProps = {
  resetPasswordFromToken
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer));
