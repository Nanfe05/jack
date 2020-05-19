import * as actionType from '../actionTypes';

export const switchHomeTab = (payload) => ({
    type: actionType.SWITCH_HOME_TAB,
    payload: payload
});

export const switchLogin = () =>({
    type: actionType.SWITCH_LOGIN
})

export const switchSignup = () =>({
    type: actionType.SWITCH_SIGNUP
})

export const switchIsUserLogged = () =>({
    type: actionType.SWITCH_IS_USER_LOGGED
})