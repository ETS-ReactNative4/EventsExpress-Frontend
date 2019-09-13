﻿import React from "react";
import CommentItem from "../components/comment/comment-item";
import { connect } from "react-redux";
import deleteComm from "../actions/delete-comment";
import Fab from '@material-ui/core/Fab';
import '../components/comment/Comment.css';
import CommentList from '../components/comment/comment-list';
import AddComment from './add-comment';




class commentItemWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        info: true
    }

    changeInfo = () => {
        this.setState({
            info: !this.state.info
        }); 
            
    };

    submit = () => {
        let value = this.props.item;
        this.props.deleteComm({ id: value.id, eventId: this.props.eventId });
    };

    render() {
        const { id } = this.props.item;
        return (
            <>
                <div className="ItemComment">
                    <div className="comment-container">
                        <CommentItem item={this.props.item} user={this.props.userId} />
                        <div className="ItemComment">
                        {(this.props.item.commentsId === null && this.state.info) &&
                            <div className="mybutton">
                                <Fab
                                    size="small"
                                    onClick={this.changeInfo}
                                    aria-label="Reply">
                                    <i className="fa fa-comments"></i>
                                </Fab>
                                </div>}
                            {(this.props.item.commentsId === null && !this.state.info) &&
                                <div className="mybutton">
                                    <Fab
                                        size="small"
                                        onClick={this.changeInfo}
                                        aria-label="Cancel">
                                        <i className="fa fa-times"></i>
                                    </Fab>
                                </div>}
                        {this.props.item.userId === this.props.userId &&
                            <div className="mybutton">
                                <Fab
                                    size="small"
                                    onClick={this.submit}
                                    aria-label="Delete">
                                    <i className="fa fa-trash"></i>
                                </Fab>
                            </div>
                        }
                        </div>
                    </div>
                    
                </div>
                {!this.state.info && <AddComment parentId={id} />}
                <div className="children">
                    {(this.props.item.children.length !== 0 && this.props.item.children !== null) ? <CommentList data_list={this.props.item.children} /> : null}
                </div>
            </>
        )
    }
};
const mapStateToProps = state => ({
    userId: state.user.id,
    eventId: state.event.data.id
});

const mapDispatchToProps = dispatch => {
    return {
        deleteComm: (value) => dispatch(deleteComm(value))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(commentItemWrapper);