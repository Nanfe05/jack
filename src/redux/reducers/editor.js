import * as actionType from '../actionTypes';



const myInitialState = {
    selected:null,
    scale:1,
    breakpoint:'md',
    objects:[]
};

export default function(state = myInitialState, action){
    switch(action.type){
        case actionType.EDITOR_OBJECT_EDIT:
            return{
                ...state,
                objects:state.objects.map((el)=>{
                    
                    if(el.id === state.selected){  
                    
                        if(el.template.breakpoints[state.breakpoint].position !== 'absolute'){
                            el.template.breakpoints[state.breakpoint].position = 'absolute';
                        }
                        const temp = {
                            ...el,
                            template:{
                                ...el.template,
                                breakpoints:{
                                    ...el.template.breakpoints,
                                    [state.breakpoint]:{
                                        ...el.template.breakpoints[state.breakpoint],
                                        [action.atribute]:action.payload,
                                        [action.atribute2]:action.payload2
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
        default:
            return state;
    }
}