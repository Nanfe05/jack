import React,{useEffect} from 'react';
// Special Functions
import {DynamicStyles} from '../../micro/editorElements/functions';

// HTML TO JSON
//import {HTMLToJSON} from './htmlToJson';
// JSON TO HTML
import {JsonToHtml} from '../../micro/editorElements/text/text01/JsonToHtml';

// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const UpdateTextContentWithJson = (id,contents) =>{
    let textBox = document.getElementById(`${id}`);
    textBox.innerHTML= JsonToHtml(contents);
    // Prevent Memory Leak
    //textBox.parentNode.removeChild(textBox);
};

export const Text01 = (props) =>{
    const {id,contents,layout,breakpoint,editorSelected} = props;
    useEffect(()=>{
       UpdateTextContentWithJson(id,contents);
    }
    // eslint-disable-next-line
    ,[contents]
    );

    
    
    return(
        <div
        id={id}
        style={DynamicStyles(layout,breakpoint,id,editorSelected)}
        >
            <div 
            id={`${id}_content_editable`}
            className={`text01`}
            >
                
            </div>
        </div>
    )
}


export const Box01 = (props) =>{
    const {id,layout,breakpoint,editorSelected} = props;

    return(
        <div
        id={id}
        style={DynamicStyles(layout,breakpoint,id,editorSelected)}
        className={`text01`}
        >
            <div>
                {}
            </div>
        </div>
    )
}

export const Media01 = (props) =>{
    const {id,layout,breakpoint,editorSelected} = props;

    
    return(
        <div
        id={id}
        style={DynamicStyles(layout,breakpoint,id,editorSelected)}
        className={`text01`}
        >
            <img 
                src={layout.md.url}
                alt={layout.md.image_name}
                style={{width:'100%',height:'100%',backgroundSize:'cover',backgroundRepeat:' no-repeat'}}
            />
        </div>
    )
}

export const NewsLetterSubscribe = (props) =>{
    const {id,contents,layout,breakpoint,editorSelected} = props;
    
    return(<div 
        className={`newsletterForm ${props.classes}`}   
        id={id}
        style={DynamicStyles(layout,breakpoint,id,editorSelected)}
    >
        <Paper elevation={2} style={{width:'100%',height:'100%', background:'none'}}>
            <form>
                <h2 
                // contentEditable={true}
                >{contents.title}</h2>
                <TextField label={`${contents.input_1_label}`}/>
                <TextField label={`${contents.input_2_label}`}/>
                <Button>
                {`${contents.input_submit_label}`}
                </Button>
            </form>
        </Paper>
        
    </div>);
}