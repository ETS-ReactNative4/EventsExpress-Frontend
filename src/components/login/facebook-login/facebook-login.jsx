import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import "../google-facebook-login.scss";
import { FaFacebook } from "react-icons/fa";
import ButtonNames from "../../../constants/ButtonNamesConstants";

const { FACEBOOK_LOGIN } = ButtonNames;

const LoginFacebook = ({ config }, props) => {
  const responseFacebook = response => {
    if (!response.email) {
      props.setErrorAlert("Please add email to your facebook account!");
    }

    props.loginFacebook(response);
  };

  return (
    <div>
      <FacebookLogin
        appId={config.facebookClientId}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btn-facebook"
        icon={<FaFacebook className="icon" />}
        textButton={<span className="text"> {FACEBOOK_LOGIN} </span>}
        version="3.1"
      />
    </div>
  );
};

LoginFacebook.defaultProps = {
  config: {},
  facebookClientId: "",
  loginFacebook: () => {},
  setErrorAlert: () => {},
};

LoginFacebook.propTypes = {
  config: PropTypes.object,
  facebookClientId: PropTypes.string,
  loginFacebook: PropTypes.func,
  setErrorAlert: PropTypes.func,
};

export default LoginFacebook;
