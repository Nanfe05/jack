import * as actionType from '../actionTypes';



const myInitialState = {
    fontFamily:'Hind',
    fontSize:3,
    fontWeight:'',
    fontStyle:'',
    fontUnderline:'',
    fontColor:'',
    fontBgColor:'',
    fontAlign:'align-left',
    ListStyle:''
};


export default function(state = myInitialState, action){
    switch(action.type){
        case actionType.TEXT_EDITOR_CHANGE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}