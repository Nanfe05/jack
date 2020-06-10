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

/*
Loading
*/
export const SwitchLoading = () =>({
    type: actionType.SWITCH_LOADING
});
/*
Notifications
*/
export const SetErrorsMsg = (payload) => ({
    type: actionType.SET_ERRORS_MSG,
    payload:payload
});
export const ClearErrorsMsg = () => ({
    type: actionType.CLEAR_ERROS_MSG
});
export const SetSuccessMsg = (payload) => ({
    type: actionType.SET_SUCCESS_MSG,
    payload:payload
});
export const ClearSuccessMsg = () => ({
    type: actionType.CLEAR_SUCCESS_MSG
});
/*
User
*/
export const SwitchUserIsLogged = () =>({
    type: actionType.USER_IS_LOGGED
});
export const SetUserName = (payload) =>({
    type: actionType.USER_NAME,
    payload:payload
});
export const UserNeedValidation = () =>({
    type: actionType.USER_NEED_VALIDATION
});
/*
Landing Pages
*/
export const UIaddLandingPages = (lp_public,lp_private) =>({
    type:  actionType.UI_ADD_LANDINGPAGES,
    lp_public:lp_public,
    lp_private:lp_private
});
export const UIisLoadedLandingPages =() =>({
    type: actionType.UI_ISLOADED_LANDINGPAGES
})