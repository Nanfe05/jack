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
        
        default:
            return state;
    }
}