import React from 'react';

//Redux
import {connect} from 'react-redux';
import {SelectedObject} from '../../../../../redux/actions/editor';
// Components 
    // Micro 
    import SelectedTool from '../../../../micro/editorElements/selectedTool/';


const Text01 = (props) =>{
    const {id,contents,breakpoint,stateObjects,editorSelected} = props;
    let objects = stateObjects.filter((el)=> el.id === id)[0];
    let layout = stateObjects.filter((el)=> el.id === id)[0].template.breakpoints;

    const controllers = id === editorSelected ? <SelectedTool id={id}/>: <div></div>;
    return(
        <div
        id={id}
        style={{
            position:`${layout[breakpoint].position}`,
            left:`${layout[breakpoint].left}`,
            top:`${layout[breakpoint].top}`,
            zIndex:`${id === editorSelected ? '100':'0'}`
            
        }}
        className={`text01`}
            onMouseDown={(e)=>{  
                //e.preventDefault();
                if(props.editorSelected === null || props.editorSelected !== id){
                    props.SelectedObject(id);
                }
            }}
        >
            {controllers}
            <div style={{backgroundColor:'white'}}
            // contentEditable={true}
            onInput={(e)=>{
                console.log(e.target.innerText);
            }}
            >
                {objects.template.content.text}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    breakpoint : state.editor.breakpoint,
    stateObjects: state.editor.objects,
    editorSelected: state.editor.selected
});

export default connect(mapStateToProps,{
    SelectedObject
})(Text01);
