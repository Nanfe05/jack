import * as actionType from '../actionTypes';

const initialState = {
    homeTab: 0,
    isUserLogged:false,
    signupForm:false,
    loginForm:false
}

export default function(state= initialState, action){
    switch(action.type){
        case actionType.SWITCH_HOME_TAB:
            return {
                ...state,
                homeTab: action.payload
            }
        case actionType.SWITCH_IS_USER_LOGGED:
            return{
                ...state,
                isUserLogged:!state.isUserLogged
            }
        case actionType.SWITCH_LOGIN:
            return{
                ...state,
                loginForm:!state.loginForm
            }
        case actionType.SWITCH_SIGNUP:
            return{
                ...state,
                signupForm:!state.signupForm
            }
        default:
            return state;
    }
}