import * as actionType from '../actionTypes';


export const AddElement = (element,id) =>{
    let merge ={...element};
    merge.id=id;
    return ({
    type: actionType.EDITOR_ADD,
    payload: merge
})};