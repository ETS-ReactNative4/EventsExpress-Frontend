﻿import initialState from '../store/initialState';
export const SET_OPEN_STATUS = "IS_OPEN";

export  function TogleOpenWind(data) {
    return dispatch => {
        dispatch(isOpen(data));
    }
}

function isOpen(data){
    return {
        type: SET_OPEN_STATUS,
        payload: data
    }
}  
