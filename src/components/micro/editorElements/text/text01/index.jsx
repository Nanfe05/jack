import React,{useEffect} from 'react';

//Redux
import {connect} from 'react-redux';
import {SelectedObject,ChangeTopBar,EditorEditContent} from '../../../../../redux/actions/editor';
import{TextEditorChange} from '../../../../../redux/actions/texteditor';
// Components 
    // Micro 
    import SelectedTool from '../../../../micro/editorElements/selectedTool/';

// Special Functions
import {DynamicStyles} from '../../functions';

// HTML TO JSON
//import {HTMLToJSON} from './htmlToJson';
// JSON TO HTML
import {JsonToHtml} from './JsonToHtml';

const Text01 = (props) =>{
    const {id,contents,layout,breakpoint,editorSelected,TextEditorChange,textEditor} = props;

    useEffect(()=>{
        let xyz= document.getElementById(`${id}_content_editable`);
        xyz.innerHTML= JsonToHtml(contents);
        // eslint-disable-next-line
    },[contents]);

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
            onSelect={(e)=>{
                let getSelection = window.getSelection();
                //let mySelection = e.target.innerText.substring(getSelection.anchorOffset,getSelection.focusOffset);
                
                // Font Family
                 let fontFamily = getComputedStyle(getSelection.anchorNode.parentElement).fontFamily;
                 if(textEditor.fontFamily !== fontFamily){
                     TextEditorChange({fontFamily});
                 }
                // Font Size
                let fontSize = getComputedStyle(getSelection.anchorNode.parentElement).fontSize;
                let numSize;
                switch(fontSize){
                    case '10px': numSize = 1; break;
                    case '13px': numSize = 2; break;
                    case '16px': numSize = 3; break;
                    case '18px': numSize = 4; break;
                    case '24px': numSize = 5; break;
                    case '32px': numSize = 6; break;
                    case '48px': numSize = 7; break;
                    default:  numSize = 3;
                }
                if(textEditor.fontSize !== numSize){
                    TextEditorChange({fontSize:numSize});
                }
                // Font Bold
                let fontWeight = getComputedStyle(getSelection.anchorNode.parentElement).fontWeight;
                if(textEditor.fontWeight !== fontWeight){
                    TextEditorChange({fontWeight});
                }
                // Font Style
                let fontStyle = getComputedStyle(getSelection.anchorNode.parentElement).fontStyle;
                if(textEditor.fontStyle !== fontStyle){
                    TextEditorChange({fontStyle});
                }
                // Font Decoration - Line
                let fontUnderline = getComputedStyle(getSelection.anchorNode.parentElement).textDecorationLine;
                if(textEditor.fontUnderline !== fontUnderline){
                    TextEditorChange({fontUnderline});
                }
                // Text Color
                let fontColor = getComputedStyle(getSelection.anchorNode.parentElement).color;
                if(textEditor.fontColor !== fontColor){
                    TextEditorChange({fontColor});
                }
                // Text Back Ground Color
                let fontBgColor = getComputedStyle(getSelection.anchorNode.parentElement).backgroundColor;
                if(textEditor.fontBgColor !== fontBgColor){
                    TextEditorChange({fontBgColor});
                }
                // Text Aligment
                let fontAlign = getComputedStyle(getSelection.anchorNode.parentElement).textAlign;
                if(textEditor.fontAlign !== fontAlign){
                    TextEditorChange({fontAlign});
                }
                // List Style
                let ListStyle = getComputedStyle(getSelection.anchorNode.parentElement).listStyleType;
                if(textEditor.ListStyle !== ListStyle){
                    TextEditorChange({ListStyle});
                }

            }}
            contentEditable={true}
            id={`${id}_content_editable`}
            className={`text01`}
            >
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    breakpoint : state.editor.breakpoint,
    stateObjects: state.editor.objects,
    editorSelected: state.editor.selected,
    textEditor: state.textEditor
});

export default connect(mapStateToProps,{
    SelectedObject,
    ChangeTopBar,
    TextEditorChange
})(Text01);
