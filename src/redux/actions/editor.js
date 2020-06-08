import * as actionType from '../actionTypes';


export const AddElement = (element,id) =>{
    let merge ={...element};
    merge.id=id;
    return ({
    type: actionType.EDITOR_ADD,
    payload: merge
})};


export const EditorScale = (payload) =>({
    type: actionType.EDITOR_SCALE,
    payload:payload
});

export const SelectedObject = (payload) =>({
    type:actionType.EDITOR_OBJECT_SELECTED,
    payload:payload
});

export const EditObject = (atribute,payload,atribute2=undefined,payload2=undefined) =>({
    type:actionType.EDITOR_OBJECT_EDIT,
    payload:payload,
    atribute:atribute,
    atribute2:atribute2,
    payload2:payload2
});

export const ChangeTopBar = (payload) =>({
    type:actionType.CHANGE_TOPBAR,
    payload:payload
});

export const EditorEditContent = (payload) =>({
    type: actionType.EDITOR_EDIT_CONTENT,
    payload:payload
});