import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Module from '../helpers';
import GoogleLogin from '../../containers/GoogleLogin';
import LoginFacebook from '../../containers/FacebookLogin';
import TwitterLogin from '../../containers/TwitterLogin';
import ErrorMessages from '../shared/errorMessage';
import config from '../../config';
import { Redirect } from "react-router";

const { validate, renderTextField } = Module;

class Login extends Component {

    render() {
        const { pristine, reset, submitting } = this.props;

        return (
            <div className="auth">
                <form onSubmit={this.props.handleSubmit} autoComplete="off">
                    <div>
                        <Field
                            name="email"
                            component={renderTextField}
                            label="E-mail:"
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            component={renderTextField}
                            label="Password:"
                            type="password"
                        />
                    </div>
                    <div>
                        <DialogActions>
                            <Button fullWidth={true} type="button" color="primary" disabled={pristine || submitting} onClick={reset}>
                                CLEAR
                            </Button >
                            <Button fullWidth={true} type="submit" value="Login" color="primary">
                                Sign In
                                <Redirect to='/home' />
                            </Button>
                        </DialogActions>
                    </div>
                </form>
                <div className="d-flex justify-content-around mb-3">
                    {config.TWITTER_LOGIN_ENABLED && <TwitterLogin />}
                    <LoginFacebook />
                    <GoogleLogin />
                </div>
                {this.props.error &&
                    <ErrorMessages error={this.props.error} className="text-center" />
                }
            </div>
        );
    }
}

Login = reduxForm({
    form: "login-form",
    validate
})(Login);

export default Login;
