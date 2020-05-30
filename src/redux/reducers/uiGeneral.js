import * as actionType from '../actionTypes';

const initialState = {
    homeTab: 0,
    signupForm:false,
    loginForm:false,
    notifications:{
        errors:[],
        success:[]
    },
    isLoading:false
}

export default function(state= initialState, action){
    switch(action.type){
        case actionType.CLEAR_SUCCESS_MSG:
            return{
                ...state,
                notifications:{
                    ...state.notifications,
                    success:[]
                }
            }
        case actionType.SET_SUCCESS_MSG:
            return {
                ...state,
                notifications:{
                    ...state.notifications,
                    success:action.payload
                }
            }
        case actionType.CLEAR_ERROS_MSG:
            return{
                ...state,
                notifications:{
                    ...state.notifications,
                    errors:[]
                }
            }
        case actionType.SET_ERRORS_MSG:
            return {
                ...state,
                notifications:{
                    ...state.notifications,
                    errors:action.payload
                }
            }
        case actionType.SWITCH_LOADING:
            return{
                ...state,
                isLoading: !state.isLoading
            }
        case actionType.SWITCH_HOME_TAB:
            return {
                ...state,
                homeTab: action.payload
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