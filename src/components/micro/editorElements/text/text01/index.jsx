import React from 'react';

//Redux
import {connect} from 'react-redux';
import {SelectedObject,ChangeTopBar} from '../../../../../redux/actions/editor';
// Components 
    // Micro 
    import SelectedTool from '../../../../micro/editorElements/selectedTool/';
// Special Functions
import {DynamicStyles} from '../../functions';

const Text01 = (props) =>{
    const {id,contents,layout,breakpoint,editorSelected} = props;

    const controllers = id === editorSelected ? <SelectedTool id={id}/>: <div></div>;
    return(
        <div
        id={id}
        style={DynamicStyles(layout,breakpoint,id,editorSelected)}
        
            onMouseDown={(e)=>{  
                //e.preventDefault();
                if(props.editorSelected === null || props.editorSelected !== id){
                    props.SelectedObject(id);
                    props.ChangeTopBar('txt');
                }
            }}
        >
            {controllers}
            <div 
            contentEditable={true}
            onInput={(e)=>{
                console.log(e.target.innerText);
            }}
            id={`${id}_content_editable`}
            className={`text01`}
            >
                {contents.text}
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
    SelectedObject,
    ChangeTopBar
})(Text01);
