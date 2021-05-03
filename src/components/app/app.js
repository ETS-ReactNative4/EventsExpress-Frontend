import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Home from '../home';
import Profile from '../profile';
import UserItemViewWrapper from '../../containers/user-item-view';
import EventItemViewWrapper from '../../containers/event-item-view';
import EventScheduleViewWrapper from '../../containers/event-Schedule-item-view';
import EventSchedulesListWrapper from '../../containers/eventSchedules-list';
import Layout from '../layout';
import SearchUserWrapper from '../../containers/UserSearchWrapper';
import NotFound from '../Route guard/404';
import Authentication from '../Authentication/authentication';
import Chat from '../chat';
import UserChats from '../chat/user_chats';
import NotificationEvents from '../notification_events';
import ContactUsWrapper from '../../containers/contactUs';
import LoginTwitter from '../../containers/TwitterLogin';
import AddEventWrapper from '../../containers/add-event';
import RegisterCompleteWrapper from '../../containers/register-complete-wrapper';
import Admin from '../admin';
import RegisterSuccess from '../register/register-success';
import EventEditWrapper from '../../containers/event-edit-wrapper';
import EventDraftListWrapper from '../../containers/event-draft-list';
import Unauthorized from '../Route guard/401';
import Forbidden from '../Route guard/403';
import withAuthRedirect from '../../security/withAuthRedirect';
import { connect } from 'react-redux';
import AuthUser from '../../actions/login/auth-user-action';

class App extends Component {
    constructor(props){
        super(props);
        this.props.authUser();
    }

    UserRoleSecurity = withAuthRedirect(['User']);
    AdminRoleSecurity = withAuthRedirect(['Admin']);
    AdminAndUserRoleSecurity = withAuthRedirect(['Admin', 'User']);

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/home/events" component={Home} />
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Redirect to="/home/events" />
                            )}
                        />
                        <Route
                            exact
                            path="/home"
                            render={() => (
                                <Redirect to="/home/events" />
                            )}
                        />
                        <Route path='/registerComplete' component={this.AdminAndUserRoleSecurity(RegisterCompleteWrapper)} />
                        <Route path="/editProfile/" component={this.AdminAndUserRoleSecurity(Profile)} />
                        <Route path="/event/:id/:page" component={EventItemViewWrapper} />
                        <Route path="/eventSchedules" component={EventSchedulesListWrapper} />
                        <Route path="/eventSchedule/:id" component={EventScheduleViewWrapper} />
                        <Route path="/user/:id" component={this.UserRoleSecurity(UserItemViewWrapper)} />
                        <Route path="/admin" component={this.AdminRoleSecurity(Admin)} />
                        <Route path="/search/users" component={this.UserRoleSecurity(SearchUserWrapper)} />
                        <Route path="/user_chats" component={this.AdminAndUserRoleSecurity(UserChats)} />
                        <Route path="/notification_events" component={this.AdminAndUserRoleSecurity(NotificationEvents)} />
                        <Route path="/authentication/:id/:token" component={Authentication} />
                        <Route path="/authentication/twitterLogin" component={LoginTwitter} />
                        <Route path="/chat/:chatId" component={this.AdminAndUserRoleSecurity(Chat)} />
                        <Route path="/contactUs" component={this.UserRoleSecurity(ContactUsWrapper)} />
                        <Route path='/event/createEvent' component={this.UserRoleSecurity(AddEventWrapper)} />
                        <Route path='/registerSuccess' component={this.AdminAndUserRoleSecurity(RegisterSuccess)} />
                        <Route path='/editEvent/:id' component={this.UserRoleSecurity(EventEditWrapper)} />
                        <Route path='/drafts' component={this.UserRoleSecurity(EventDraftListWrapper)} />
                        <Route path='/unauthorized' component={Unauthorized} />
                        <Route path='/forbidden' component={Forbidden} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        authUser: () => dispatch(AuthUser())
    }
}

export default connect(null, mapDispatchToProps)(App);
