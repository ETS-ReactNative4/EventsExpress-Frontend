﻿import { UserService } from '../../services';
import { setSuccessAllert } from '../alert-action';
import { SubmissionError } from 'redux-form';
import { buildValidationState } from '../../components/helpers/action-helpers';
import { getRequestInc, getRequestDec } from "../request-count-action";


export const editGender = {
    UPDATE: "UPDATE_GENDER"
}

const api_serv = new UserService();

export default function edit_Gender(data) {
    return async dispatch => {
        dispatch(getRequestInc());
        let response = await api_serv.setGender(data);
        if (!response.ok) {
            throw new SubmissionError(await buildValidationState(response));
        }
        dispatch(getRequestDec());
        dispatch(updateGender(data));
        dispatch(setSuccessAllert('Gender is successfully set'));
        return Promise.resolve();
    }
}

function updateGender(data) {
    return {
        type: editGender.UPDATE,
        payload: data
    };
}
