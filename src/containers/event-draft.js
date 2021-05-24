import React, { Component } from 'react';
import { withRouter } from "react-router";
import EventForm from '../components/event/event-form';
import EventChangeStatusModal from '../components/event/event-change-status-modal';
import eventStatusEnum from '../constants/eventStatusEnum';
import { connect } from 'react-redux';
import { getFormValues, reset , isPristine} from 'redux-form';
import { setEventPending, setEventSuccess, edit_event, publish_event} from '../actions/event/event-add-action';
import { validateEventForm } from '../components/helpers/helpers'
import { change_event_status } from '../actions/event/event-item-view-action';
import { setSuccessAllert } from '../actions/alert-action';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import get_categories from '../actions/category/category-list-action';
import './css/Draft.css';


class EventDraftWrapper extends Component {

    componentWillMount = () => {
        this.props.get_categories();
    }

    componentDidUpdate = () => {
        if (!this.props.add_event_status.errorEvent && this.props.add_event_status.isEventSuccess) {
            this.props.reset();
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onPublish = async (values) => { 
        if (!this.props.pristine)
        {
            await this.props.edit_event({ ...validateEventForm(values), user_id: this.props.user_id, id: this.props.event.id });
        }
        return this.props.publish(this.props.event.id);
    }

    onSave = async () => {
        await this.props.edit_event({ ...validateEventForm(this.props.form_values), user_id: this.props.user_id, id: this.props.event.id });
        this.props.alert('Your event has been successfully saved!');    
    }

    onDelete = async (reason) => {
        await this.props.delete(this.props.event.id, reason);
        this.props.alert('Your event has been successfully deleted!');
        this.props.history.goBack();
    }
   
    render() {
        return <>
            <header>
                <div className="row pl-md-4">
                    <div className="col-12 py-3">
                        <div className="float-left">
                            <h1>Edit event draft</h1>                  
                        </div>
                        <div className='d-flex flex-row align-items-center justify-content-center float-right'>
                            <EventChangeStatusModal
                                submitCallback={this.onDelete}
                                button={
                                    <IconButton className="text-danger" size="medium">
                                        <i className="fas fa-trash"></i>
                                    </IconButton>
                                }
                            />
                        </div>
                    </div>
                </div>
                <hr className="gradient ml-4 mt-0 mb-3"/>
            </header>
            <EventForm
                all_categories={this.props.all_categories}
                onSubmit={this.onPublish}
                initialValues={this.props.event}
                form_values={this.props.form_values}
                haveReccurentCheckBox={true}
                eventId={this.props.event.id}>
                <div className="col">
                    <Button
                        className="border"
                        fullWidth={true}
                        color="primary"
                        onClick={this.onSave}>
                        Save
                    </Button>
                </div>
                <div className="col">
                    <Button
                        className="border"
                        fullWidth={true}
                        color="primary"
                        type="submit">
                        Publish
                    </Button>
                </div>
                <div className="col">
                    <Button
                        className="border"
                        fullWidth={true}
                        color="primary"
                        onClick={this.props.history.goBack}>
                        Cancel
                    </Button>
                </div>
            </EventForm>
        </>
    }
}   

const mapStateToProps = (state) => ({
    user_id: state.user.id,
    add_event_status: state.add_event,
    all_categories: state.categories,
    form_values: getFormValues('event-form')(state),
    pristine: isPristine('event-form')(state),
    event: state.event.data,
});

const mapDispatchToProps = (dispatch) => {
    return {
        edit_event: (data) => dispatch(edit_event(data)),
        delete: (eventId, reason) => dispatch(change_event_status(eventId, reason, eventStatusEnum.Deleted)),
        publish: (data) => dispatch(publish_event(data)),
        get_categories: () => dispatch(get_categories()),
        alert: (msg) => dispatch(setSuccessAllert(msg)),
        reset: () => {
            dispatch(reset('event-form'));
            dispatch(setEventPending(true));
            dispatch(setEventSuccess(false));
        }
    }
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
)(EventDraftWrapper));