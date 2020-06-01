import React from 'react';

//Redux
import {connect} from 'react-redux';
import {SelectedObject,ChangeTopBar} from '../../../../../redux/actions/editor';
// Components 
    // Micro 
    import SelectedTool from '../../../../micro/editorElements/selectedTool/';
// Special Functions
import {DynamicStyles} from '../../functions';

const Media01 = (props) =>{
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
                    props.ChangeTopBar('img');
                }
            }}
        >
            {controllers}
            <img 
                src={layout.md.url}
                alt={layout.md.image_name}
                style={{width:'100%',height:'100%',backgroundSize:'cover',backgroundRepeat:' no-repeat'}}
            />
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
})(Media01);