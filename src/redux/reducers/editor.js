import * as actionType from '../actionTypes';



const myInitialState = {
    project_id:null,
    lp_name:' ',
    selected:null,
    topBar:null,
    scale:1,
    breakpoint:'md',
    sizes:{
        xs:{
            width:300,
            height:500
        },
        sm:{
            width:600,
            height:1000
        },
        md:{
            width:960,
            height:1200
        },
        lg:{
            width:1280,
            height:1200
        },
        xl:{
            width:1920,
            height:1200
        }
    },
    objects:[]
};

export default function(state = myInitialState, action){
    switch(action.type){
        case actionType.EDITOR_SET_PROJECT_ID:
            return{
                ...state,
                project_id:action.payload
            }
        case actionType.EDITOR_NAME_CHANGE:
            return{
                ...state,
                lp_name:action.payload
            }
        case actionType.EDITOR_CLEAR_CANVAS:
            return{
                ...myInitialState
            }
        case actionType.EDITOR_ADJUST_HEIGHT:
            return{
                ...state,
                sizes:{
                    ...state.sizes,
                    [state.breakpoint]:{
                        ...state.sizes[state.breakpoint],
                        height:action.payload
                    }
                }
            }
        case actionType.EDITOR_CHANGE_BREAKPOINT:
            return{
                ...state,
                breakpoint:action.payload
            }
        case actionType.EDITOR_EDIT_CONTENT:
            return{
                ...state,
                objects:state.objects.map((el)=>{
                    
                    if(el.id === state.selected){  
                    
                        const temp = {
                            ...el,
                            template:{
                                ...el.template,
                                content:action.payload
                            }
                        };
                
                       return {...temp};
                    }
                    return el;
                    
                    
                })
            }
        case actionType.EDITOR_OBJECT_EDIT:
            return{
                ...state,
                objects:state.objects.map((el)=>{
                    
                    if(el.id === state.selected){  
                    
                        if(el.template.layout[state.breakpoint].position !== 'absolute'){
                            el.template.layout[state.breakpoint].position = 'absolute';
                        }
                        const temp = {
                            ...el,
                            template:{
                                ...el.template,
                                layout:{
                                    ...el.template.layout,
                                    [state.breakpoint]:{
                                        ...el.template.layout[state.breakpoint],
                                        [action.atribute]:action.payload, // TODO REVIEW
                                        [action.atribute2]:action.payload2 // TODO REVIEW
                                    }
                                }
                            }
                        };
                
                       return {...temp};
                    }
                    return el;
                    
                    
                })
            }
        case actionType.EDITOR_ADD:
            return {
                ...state,
                objects:[
                    ...state.objects,
                    action.payload
                ]};
        case actionType.EDITOR_SCALE:
            return{
                ...state,
                scale:action.payload
            };
        case actionType.EDITOR_OBJECT_SELECTED:
            return{
                ...state,
                selected:action.payload
            }
            case actionType.CHANGE_TOPBAR:
                return{
                    ...state,
                    topBar:action.payload
                }
        default:
            return state;
    }
}