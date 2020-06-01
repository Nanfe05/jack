import React from 'react';

//Redux
import {connect} from 'react-redux';
import {SelectedObject} from '../../../../../redux/actions/editor';
// Components 
    // Micro 
    import SelectedTool from '../../../../micro/editorElements/selectedTool/';
// Special Functions
import {DynamicStyles} from '../../functions';

const Box01 = (props) =>{
    const {id,layout,breakpoint,editorSelected} = props;

    const controllers = id === editorSelected ? <SelectedTool id={id}/>: <div></div>;
    return(
        <div
        id={id}
        style={DynamicStyles(layout,breakpoint,id,editorSelected)}
        className={`text01`}
            onMouseDown={(e)=>{  
                //e.preventDefault();
                if(props.editorSelected === null || props.editorSelected !== id){
                    props.SelectedObject(id);
                }
            }}
        >
            {controllers}
            <div>
                {}
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
})(Box01);