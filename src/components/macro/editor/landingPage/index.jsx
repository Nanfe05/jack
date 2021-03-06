import React, {useEffect,Fragment} from 'react';

// Redux 
import {connect} from 'react-redux';
import {
    AddElement,
    EditorScale,
    SelectedObject,
    ChangeTopBar,
    EditObject,
    EditorEditContent,
    ChangeBreakPoint,
    ChangeEditorHeight,
    EditorClearCanvas,
    EditorNameChange,
    EditorSetProjectID,
    EditorSetWholeProject,
    SwitchIsLoadingContents
} from '../../../../redux/actions/editor';
import {SetErrorsMsg,SetSuccessMsg} from '../../../../redux/actions/uiGeneral';
// Functions
import {HTMLToJSON} from '../../../micro/editorElements/text/text01/htmlToJson';
// Material UI
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// Icons
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// Components
// Micro 
import ColorsButton from '../../../micro/buttons/colorsButton/';
// Tools
import TextEditorTools from './texteditor/';
import ModificationToolBar from './modificationToolbar/';
import NewsLetterSubscribe from '../../../micro/editorElements/forms/newsLetterSubscribe/';
import Text01 from '../../../micro/editorElements/text/text01/';
import Box01 from '../../../micro/editorElements/boxes/background/';
import Media01 from '../../../micro/editorElements/media/media01/';
// Generate Unique IDs
import {v4 as uuidv4} from 'uuid';
/*
COMPONENT STYLES SHOULD BE BROUGHT FROM SERVER 
*/
import * as forms from '../../../micro/editorElements/forms/newsLetterSubscribe/baseLayout.json';
import * as texts from '../../../micro/editorElements/text/text01/baseLayout.json';
import * as boxes from '../../../micro/editorElements/boxes/background/baseLayout.json';
import * as media from '../../../micro/editorElements/media/media01/baseLayout.json';
// Server Communication
const axios = require('axios');

const SettingProjectEnvironment = async(
    EditorSetProjectID,
    EditorSetWholeProject,
    SetErrorsMsg,
    SetSuccessMsg,
    SwitchIsLoadingContents
) =>{
    // IS THE PROJECT -> NEW, UPDATE OR FROM LAYOUT ?
    let url = new URL(window.location.href);
    let isupdate = url.searchParams.get('u');
        isupdate = isupdate === '1' ? true : false;
    let lp_id= url.searchParams.get('lp');
    // ask server for the document if lp 
    SwitchIsLoadingContents();
    if(lp_id){
            try{
                let obj = {
                    token: localStorage.getItem('x-jackMarketing-token'),
                    id:lp_id
                }
                let headers={
                    'content-type':'application/json',
                }
                const lps = await axios.post('/jackmarketing/landingpage/content',obj,headers);

                let name = isupdate ? lps.data.content.content.lp_name : null;

                EditorSetWholeProject(
                    lps.data.content.content.objects,
                    lps.data.content.content.sizes,
                    name
                );
                //console.log(lps.data.content);
                if(lps.data.success){
                    SetSuccessMsg(lps.data.success);
                }
                // IF Contents are brought correctly set ID to update when save
                if(isupdate){
                    EditorSetProjectID(lp_id);
                }
                
            }catch(err){
                let errors = err.response.data.errors;
                if(errors){
                    SetErrorsMsg(errors);
                }
                
            }
    }
    // set id if update 
    // set server response
    // Work on Back - if save check if user is ownes . save , sent retro 
};



const EditorLandingPage = (props) =>{

    // IF NAME IS NULL CHANGE NAME
    useEffect(()=>{

        if(props.editor.lp_name.replace(/\s/g,'') === ''){
            props.EditorNameChange(uuidv4());
        }
    });
    useEffect(()=>{
        if(props.editor.isLoadingContents){
            SettingProjectEnvironment(
                props.EditorSetProjectID,
                props.EditorSetWholeProject,
                props.SetErrorsMsg,
                props.SetSuccessMsg,
                props.SwitchIsLoadingContents
            );
        }
    // eslint-disable-next-line
    },[props.editor.isLoadingContents]);


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
            return <Text01 
                            key={id} id={id} contents={el.template.content}
                            layout={el.template.layout}
                />;
        }
        if(el.component === 'Box01'){
            let id = el.id;
            return <Box01 
                            key={id} id={id} contents={el.template.content}
                            layout={el.template.layout}
                />;
        }
        if(el.component === 'Media01'){
            let id = el.id;
            return <Media01 
                            key={id} id={id} contents={el.template.content}
                            layout={el.template.layout}
                />;
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
            <Button className='tool' onClick={()=>{
                let elements=boxes[0];
                props.AddElement(elements,uuidv4())}
                }>
                <CropLandscapeIcon/>
                <h2>BackGround</h2>
            </Button>
            <Button className='tool' onClick={()=>{
                let elements=media[0];
                props.AddElement(elements,uuidv4())}
                }>
                <PhotoSizeSelectActualIcon/>
                <h2>Image</h2>
            </Button>
        </div>
    :
    <ModificationToolBar editor={props.editor}/>
    ;
    
    /*
     *TOP BAR 
     */
    const itemSelected = props.editor && props.editor.selected ?
    props.editor.objects.filter(el => el.id === props.editor.selected)[0]
    :
    null;
    const bk = props.editor.breakpoint;
    const layout = itemSelected && itemSelected.template.layout;


    const topBar = !props.editor.topBar ?
    <div className='topbar_row oneElement'>
        <TextField label={'Nombre de la Landing Page:'}
            value={props.editor.lp_name}
            onChange={(e)=>{
                props.EditorNameChange(e.target.value);
            }}
            />
    </div>:
    props.editor.topBar === 'img'?
    <div className='topbar_row'>
            <TextField label={'Direccion URL:'}
            value={layout && layout[bk] && layout[bk].url !== '/assets/jpgs/nopng.png' ? layout[bk].url : 'No Image URL'}
            onChange={(e)=>{
                // TODO onChange set all breakpoints
                props.EditObject('url',e.target.value)
            }}
            />
            <TextField label={'Nombre:'}
            value={layout && layout[bk] && layout[bk].image_name ? layout[bk].image_name : ''}
            onChange={(e)=>{
                 // TODO onChange set all breakpoints
                props.EditObject('image_name',e.target.value)
            }}
            />
    </div>
    :
    props.editor.topBar === 'txt'?
    <TextEditorTools/>
    :
    <div></div>
    ;



    return(
    <Fragment>
        <div className='if_no_width'>
            Necesitas una pantalla mas ancha para usar el editor.
        </div>
        <div className='editor'>
            {sideBar}
            <div className='canvas'>
                <div className='canvas_header'>
                    <form className='scale_editor'>
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
                {topBar}
                </div>
                <div id='canvas_holder' className='canvas_canvas' onMouseDown={(e)=>{
                    // DESELECT OBJECT IF CLICK ON CANVAS
                    if(e.target.id === 'canvas' || e.target.id === 'canvas_holder'){
                        if(props.editor.selected){
                            // Convert to JSON ** If text 
                            let textElement = document.getElementById(`${props.editor.selected}_content_editable`)
                            if(textElement){
                                // console.log('change of content');
                                // console.log(HTMLToJSON(textElement));
                                props.EditorEditContent(HTMLToJSON(textElement));
                            }

                            props.SelectedObject(null);
                            props.ChangeTopBar(null);
                        }
                    }
                }}>
                        <div id='canvas' className='canvas_editor_landingPage' 
                            style={{
                                transform:`scale(${props.editor.scale},${props.editor.scale})`,
                                width:`${props.editor.sizes[props.editor.breakpoint].width}px`,
                                height:`${props.editor.sizes[props.editor.breakpoint].height}px`
                                }}>
                            {elements}
                        </div>
                </div>
                <div className='canvas_footer'>
                    <ColorsButton label='Borrar Canvas' classes='blue' action={()=>{
                        props.EditorClearCanvas();
                    }}/>
                    <div className='breakpoints'>
                        <span>Break Points:</span>
                        
                        <IconButton 
                        className={`${props.editor.breakpoint === 'xs' ?'selected':''}`}
                        onClick={()=>{
                            props.ChangeBreakPoint('xs');
                        }}>
                            <PhoneIphoneIcon/>
                        </IconButton>
                        <IconButton 
                        className={`${props.editor.breakpoint === 'sm' ?'selected':''}`}
                        onClick={()=>{
                            props.ChangeBreakPoint('sm');
                        }}>
                            <TabletAndroidIcon/>
                        </IconButton>
                        <IconButton 
                        className={`${props.editor.breakpoint === 'md' ?'selected':''}`}
                        onClick={()=>{
                            props.ChangeBreakPoint('md');
                        }}>
                            <LaptopChromebookIcon/>
                        </IconButton>
                        <IconButton 
                        className={`${props.editor.breakpoint === 'lg' ?'selected':''}`}
                        onClick={()=>{
                            props.ChangeBreakPoint('lg');
                        }}>
                            <DesktopWindowsIcon/>
                        </IconButton>
                        <IconButton 
                        className={`${props.editor.breakpoint === 'xl' ?'selected':''}`}
                        onClick={()=>{
                            props.ChangeBreakPoint('xl');
                        }}>
                            <PersonalVideoIcon/>
                        </IconButton>
                        <TextField className={'footer_toolbar'} label={'X Size:'}
                            value={props.editor.sizes[props.editor.breakpoint].height}
                            onChange={(e)=>{
                                props.ChangeEditorHeight(e.target.value)
                            }}
                            />
                    </div>
                    <ColorsButton label='Guardar' classes='green' action={async(e)=>{
                        e.preventDefault();

                        let payload = {
                            token:localStorage.getItem('x-jackMarketing-token'),
                            payload:props.editor
                        };
                        let headers = {
                            'content-type':'application/json',
                        };
                        try{
                            let response = await axios.post('/jackmarketing/landingpage',payload,headers);
                            // Set User Message
                            if(response.data.success){
                                props.SetSuccessMsg(response.data.success);
                            }
                            // Set ID
                            if(response.data.id){
                                //props.EditorSetProjectID(response.data.id);
                                // parameter to url , if reload continue updating
                                let url = new URL(`${window.location.href}?lp=${response.data.id}&u=1`);
                                window.location.replace(url);
                            }
                            //console.log(response);
                        }catch(err){
                            let errors = err.response.data.errors;
                            if(errors){
                                //console.log(errors);
                                setTimeout(()=>{
                                    
                                    props.SetErrorsMsg(errors);
                                },1000)
                            }
                        }

                    }}/>
                </div>
            </div>
        </div>
    </Fragment>
    );
}

const mapStateToProps = state => ({
    editor : state.editor
});


export default connect(mapStateToProps,{
    AddElement,
    EditorScale,
    SelectedObject,
    ChangeTopBar,
    EditObject,
    EditorEditContent,
    ChangeBreakPoint,
    ChangeEditorHeight,
    EditorClearCanvas,
    EditorNameChange,
    SetErrorsMsg,
    SetSuccessMsg,
    EditorSetProjectID,
    EditorSetWholeProject,
    SwitchIsLoadingContents

})(EditorLandingPage);