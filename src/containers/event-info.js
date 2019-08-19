import React, { Component } from 'react';
import { connect } from 'react-redux';
import {block_event,unblock_event} from '../actions/event-item-view';
import EventBlock from '../components/event/event-block';
import EventItemViewWrapper from '../containers/event-item-view';

class EventManagmentWrapper extends Component{
    constructor(props){
        super(props);
        
    }

    block = ()=> {
        console.log('BLOCK:\nId:');
        console.log(this.props);
        this.props.block()
    }

    unblock=()=>this.props.unblock()

    render(){

        return(
            <div className={(this.props.eventItem.isBlocked==true)?"bg-warning":""}>
              

              <EventBlock
                event={this.props.eventItem}               
                block={this.block}
                unblock={this.unblock}
              />  

            </div>
        )
    }
}

const mapStateToProps=(state)=>({
});

const mapDispatchToProps=(dispatch, props)=>{
    return{
        block: () => dispatch(block_event(props.eventItem.id)),
        unblock: () => dispatch(unblock_event(props.eventItem.id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EventManagmentWrapper)