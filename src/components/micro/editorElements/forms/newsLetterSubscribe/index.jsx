import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Redux
import {connect} from 'react-redux';
import {SelectedObject} from '../../../../../redux/actions/editor';


// Components 
    // Micro 
import SelectedTool from '../../../../micro/editorElements/selectedTool/';

const NewsLetterSubscribe = (props) =>{
    const {id,contents,breakpoint,stateObjects,editorSelected} = props;
    let layout = stateObjects.filter((el)=> el.id === id)[0].template.breakpoints;

    const controllers = id === editorSelected ? <SelectedTool id={id}/>: <div></div>;
        
   

    return(<div 
        className={`newsletterForm ${props.classes}`}   
        id={id}
        style={{
            position:`${layout[breakpoint].position}`,
            left:`${layout[breakpoint].left}`,
            top:`${layout[breakpoint].top}`,
            zIndex:`${id === editorSelected ? '100':'0'}`
        }}
        onMouseDown={(e)=>{  
        //e.preventDefault();
        if(props.editorSelected === null || props.editorSelected !== id){
            props.SelectedObject(id);
        }
    }}
    >
        {controllers}
        <Paper elevation={2} style={{width:'200px'}}>
            <form>
                <h2>{contents.title}</h2>
                <TextField label={`${contents.input_1_label}`}/>
                <TextField label={`${contents.input_2_label}`}/>
                <Button>
                {`${contents.input_submit_label}`}
                </Button>
            </form>
        </Paper>
        
    </div>);
}

const mapStateToProps = state =>({
    breakpoint : state.editor.breakpoint,
    stateObjects: state.editor.objects,
    editorSelected: state.editor.selected
});

export default connect(mapStateToProps,{
    SelectedObject
})(NewsLetterSubscribe);