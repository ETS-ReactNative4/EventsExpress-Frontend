import React, { Component } from 'react';
import { renderTextField, renderDatePicker, renderMultiselect } from '../helpers/helpers';
import { reduxForm, Field } from 'redux-form';
import Module from '../helpers';
import Button from "@material-ui/core/Button";

const { validate } = Module;

class EventFilter extends Component {
    
    render() {
        const { all_categories, form_values } = this.props;
        let values = form_values || {};
        return <>
            <form onSubmit={this.props.handleSubmit} className="box">
                <Field name='search' component={renderTextField} type="input" label="Search" />
                <p className="meta">
                    <span>From<br/><Field name='dateFrom' component={renderDatePicker} /></span>              
                    {values.dateFrom != null &&
                <span>To<Field name='dateTo' defaultValue={values.dateFrom} minValue={values.dateFrom} component={renderDatePicker} /></span>
              }
                </p>
                <Field
                    name="categories"
                    component={renderMultiselect}
                    data={all_categories.data}
                    valueField={"id"}
                    textField={"name"}
                    className="form-control mt-2"
                    placeholder='#hashtags'
                />
                <Button fullWidth={true} type="submit" value="Login" color="primary" disabled={this.props.submitting}>
                    Search
                </Button>
            </form>
        </>
    }
}


export default EventFilter = reduxForm({
    form: 'event-filter-form'
})(EventFilter);
