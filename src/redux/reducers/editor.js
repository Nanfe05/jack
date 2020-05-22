import * as actionType from '../actionTypes';



const myInitialState = [];

export default function(state = myInitialState, action){
    switch(action.type){
        case actionType.EDITOR_ADD:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}