import * as actionType from '../actionTypes';

export const LogInFormChange = (payload) =>({
    type: actionType.LOGIN_FORM_CHANGE,
    payload:payload
});

export const LogInFormClear = () =>({
    type: actionType.LOGIN_FORM_CLEAR
});

export const SignInFormChange = (payload) =>({
    type: actionType.SIGNIN_FORM_CHANGE,
    payload:payload
});

export const SignInFormClear = () =>({
    type: actionType.SIGNIN_FORM_CLEAR
});