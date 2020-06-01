import React from 'react';

// Redux 
import {connect} from 'react-redux';
import {AddElement,EditorScale,SelectedObject} from '../../../../redux/actions/editor';
// Material UI
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// Icons
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';

import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// Components
// Micro 
import ColorsButton from '../../../micro/buttons/colorsButton/';
// Tools
import ModificationToolBar from './modificationToolbar/';
import NewsLetterSubscribe from '../../../micro/editorElements/forms/newsLetterSubscribe/';
import Text01 from '../../../micro/editorElements/text/text01/';
// Generate IDs
import {v4 as uuidv4} from 'uuid';
/*
COMPONENT STYLES SHOULD BE BROUGHT FROM SERVER 
*/
import * as forms from '../../../micro/editorElements/forms/newsLetterSubscribe/baseLayout.json';
import * as texts from '../../../micro/editorElements/text/text01/baseLayout.json';



const EditorLandingPage = (props) =>{
    const elements = props.editor.objects.length > 0 && props.editor.objects.map((el,i)=>{
        if(el.component === 'NewsLetterSubscribe'){
            let id = el.id;
                return <NewsLetterSubscribe 
                                            key={id} id={id} contents={el.template.content}
                                            layout={el.template.layout}
                />;
        }
        if(el.component === 'Text01'){
            let id = el.id;
            return <Text01 key={id} id={id}/>
        }
        return <span ></span>;
    });

    const sideBar = !props.editor.selected ?
    <div className='tools'>
            <Button className='tool' onClick={()=>{
                let elements=forms[0];
                props.AddElement(elements,uuidv4())}
                }>
                <AssignmentIcon/>
                <h2>Form</h2>
            </Button>
            <Button className='tool' onClick={()=>{
                let elements=texts[0];
                props.AddElement(elements,uuidv4())}
                }>
                <FontDownloadIcon/>
                <h2>Text</h2>
            </Button>
            <Button className='tool'>
                <CropLandscapeIcon/>
                <h2>BackGround</h2>
            </Button>
            <Button className='tool'>
                <PhotoSizeSelectActualIcon/>
                <h2>Image</h2>
            </Button>
        </div>
    :
    <ModificationToolBar editor={props.editor}/>
    ;
    

    return(<div className='editor'>
        {sideBar}
        <div className='canvas'>
            <div className='canvas_header'>
                 <form>
                     <InputLabel>Escala: </InputLabel>
                    <Select
                    value={props.editor.scale}
                    onChange={(e)=>{
                        props.EditorScale(e.target.value);
                    }}
                    >
                        <MenuItem value={0.25}>25%</MenuItem>
                        <MenuItem value={0.5}>50%</MenuItem>
                        <MenuItem value={0.75}>75%</MenuItem>
                        <MenuItem value={1}>100%</MenuItem>
                        <MenuItem value={1.5}>150%</MenuItem>
                    </Select>
                 </form>
               
            </div>
            <div id='canvas_holder' className='canvas_canvas' onMouseDown={(e)=>{
                // DESELECT OBJECT IF CLICK ON CANVAS
                if(e.target.id === 'canvas' || e.target.id === 'canvas_holder'){
                    if(props.editor.selected){
                        props.SelectedObject(null);
                    }
                }
            }}>
                    <div id='canvas' className='canvas_editor_landingPage' style={{transform:`scale(${props.editor.scale},${props.editor.scale})`}}>
                        {elements}
                    </div>
            </div>
            <div className='canvas_footer'>
                <ColorsButton label='Descartar' classes='blue'/>
                  <div className='breakpoints'>
                     <span>Break Points:</span>
                     <IconButton>
                        <PhoneIphoneIcon/>
                     </IconButton>
                     <IconButton>
                         <LaptopChromebookIcon/>
                     </IconButton>
                     <IconButton>
                         <PersonalVideoIcon/>
                     </IconButton>
                 </div>
                <ColorsButton label='Guardar' classes='green'/>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => ({
    editor : state.editor
});


export default connect(mapStateToProps,{
    AddElement,
    EditorScale,
    SelectedObject
})(EditorLandingPage);