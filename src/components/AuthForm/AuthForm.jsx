import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./AuthForm.scss";

const AuthForm = ({ mode = false }) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    repeatPassword: "",
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className="auth_form">
      <div className="auth_form_content">
        <div className="auth_form_title">{mode ? "Register" : "Login"}</div>
        <div className="auth_form_inputs">
          <OutlinedInput
            type="text"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="Email"
            className="auth_input"
          />
          <OutlinedInput
            className="auth_input"
            type={values.showPassword ? "text" : "password"}
            value={values.repeatPassword}
            onChange={handleChange("repeatPassword")}
            placeholder="Repeat Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <OutlinedInput
            className="auth_input"
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            placeholder="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button variant="outlined" color="primary" className="auth_submit">
            Sign up
          </Button>
        </div>
        <div>
          <div className="auth_log_with">Log With In</div>
        </div>
      </div>
      <div className="auth_form_subcontent">
        <div className="form_subcontent">
          Have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

AuthForm.defaultProps = {
  mode: false,
};

AuthForm.propTypes = {
  mode: PropTypes.bool,
};

export default AuthForm;
