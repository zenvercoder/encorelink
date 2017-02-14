import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import ResetPassword from '../components/ResetPassword';
import { resetPasswordFromToken } from '../actions/userActions';

const ResetPasswordContainer = (props) => {
  function onResetPassword(formData) {
    props.resetPasswordFromToken(formData.password, props.location.query.id, props.location.query.token);
  }

  return (
    <ResetPassword onSubmit={onResetPassword} />
  );
};


const mapDispatchToProps = {
  resetPasswordFromToken
};

export default withRouter(connect(null, mapDispatchToProps)(ResetPasswordContainer));
