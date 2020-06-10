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

export const ChangeBreakPoint = (payload) =>({
    type: actionType.EDITOR_CHANGE_BREAKPOINT,
    payload:payload
});

export const ChangeEditorHeight = (payload) =>({
    type: actionType.EDITOR_ADJUST_HEIGHT,
    payload:payload
});

export const EditorClearCanvas = () =>({
    type: actionType.EDITOR_CLEAR_CANVAS
});

export const EditorNameChange = (payload) =>({
    type: actionType.EDITOR_NAME_CHANGE,
    payload:payload
});
export const EditorSetProjectID = (payload) =>({
    type: actionType.EDITOR_SET_PROJECT_ID,
    payload:payload
});