import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Redux
import {connect} from 'react-redux';
import {SelectedObject,EditObject} from '../../../../../redux/actions/editor';


// Components 
    // Micro 
import SelectedTool from '../../../../micro/editorElements/selectedTool/';

const NewsLetterSubscribe = (props) =>{
    const {id,contents,breakpoint,stateObjects,editorSelected} = props;
    let layout = stateObjects.filter((el)=> el.id === id)[0].template.breakpoints;

    const controllers = id === editorSelected ? <SelectedTool/>: <div></div>;
        
   

    return(<div 
        className={`newsletterForm ${props.classes}`}   
        id={id}
        style={{
            position:`${layout[breakpoint].position}`,
            left:`${layout[breakpoint].left}`,
            top:`${layout[breakpoint].top}`
        }}
        onMouseDown={(e)=>{  
        e.preventDefault();

        props.SelectedObject(id);

        let posx1, posx2, posy1,posy2 = 0;
        posx1= e.clientX;
        posy1=e.clientY;


        const element = document.getElementById(id);
        
        // element.classList.add('selected');
        if(element.style.position !== 'absolute'){
            element.style.position= 'absolute';
        }

        document.onmousemove=(e)=>{
            e.preventDefault();
            
            posx2=posx1-e.clientX;
            posy2=posy1-e.clientY;
            posx1=e.clientX;
            posy1=e.clientY;
            element.style.top= (element.offsetTop - posy2)+'px';
            element.style.left= (element.offsetLeft - posx2 )+'px';
        };
        document.onmouseup=(e)=>{
            
            props.EditObject('left',(element.offsetLeft )+'px','top',(element.offsetTop )+'px');
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }}
    >
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
        {controllers}
    </div>);
}

const mapStateToProps = state =>({
    breakpoint : state.editor.breakpoint,
    stateObjects: state.editor.objects,
    editorSelected: state.editor.selected
});

export default connect(mapStateToProps,{
    SelectedObject,
    EditObject
})(NewsLetterSubscribe);