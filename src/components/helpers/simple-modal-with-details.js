﻿import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from '@material-ui/core';
import { Field, reduxForm } from "redux-form";
import { renderTextField} from '../helpers/helpers';

export const validate = values => {
    const errors = {};
    const requiredFields = [
        'detailsString'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });
    if (values.detailsString && values.detailsString.length < 6) {
        errors.detailsString = `Must be minimum 6 symbols`;
    }
    return errors;
}

class SimpleModalWithDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
    }
    handleClickOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    submit = (values) => {
        this.props.submitCallback(values.detailsString);
        this.handleClose();
    }

    render() {
        const { handleSubmit, pristine, submitting, data } = this.props;
        return (
            <>
                <div onClick={this.handleClickOpen}>{this.props.button}</div>
                <Dialog
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                >
                    <form onSubmit={handleSubmit(this.submit)}>
                        <DialogContent>
                            <h4>{data}</h4>
                            <Field
                                className="form-control"
                                name='detailsString'
                                component={renderTextField}
                                type="text"
                                label={data}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                fullWidth={true}
                                type="button"
                                color="primary"
                                onClick={this.handleClose}
                            >
                                Discard
                            </Button>
                            <Button
                                fullWidth={true}
                                type="submit"
                                disabled={pristine || submitting}
                                color="primary"
                            >
                                Confirm
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </>
        );
    }
}

export default reduxForm({
    form: "details-modal-form",
    validate
})(SimpleModalWithDetails);
