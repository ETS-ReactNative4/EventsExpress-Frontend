﻿import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import Login  from '../components/login';
import login from '../actions/login';

import { useAlert } from "react-alert";

class LoginWrapper extends Component {
  submit = values => {
    this.props.login(values.email, values.password);
    };
   
  render() {
      alert = useAlert;
      let { isLoginPending, isLoginSuccess, loginError, isFirstLogin } = this.props.login;
    
    return <div>
              <Login onSubmit={this.submit} />
              {loginError && 
              <p className="text-danger text-center">{loginError}</p>
              }
       
        
           </div>
    ;
  }
}
const mapStateToProps = state => {
    return { login: state.login }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWrapper);