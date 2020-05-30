import * as actionType from '../actionTypes';

const initialState = {
    signin:{
        name:'',
        lastname:'',
        email:'',
        pass:''
    },
    login:{
        email:'',
        pass:''
    }
}

export default function(state= initialState, action){
    switch(action.type){
        case actionType.LOGIN_FORM_CHANGE:
            return {
                ...state,
                login:{
                    ...state.login,
                    ...action.payload
                }
            };
        case actionType.LOGIN_FORM_CLEAR:
            return {
                ...state,
                login:{
                    email:'',
                    pass:''
                }
            }
        case actionType.SIGNIN_FORM_CHANGE:
            return {
                ...state,
                signin:{
                    ...state.signin,
                    ...action.payload
                }
            }
        case actionType.SIGNIN_FORM_CLEAR:
            return {
                ...state,
                signin:{
                    name:'',
                    lastname:'',
                    email:'',
                    pass:''
                }
            }
        default:
            return state;
    }
}