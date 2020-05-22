import React from 'react';

// Redux 
import {connect} from 'react-redux';
import {AddElement} from '../../../../redux/actions/editor';
// Material UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
//import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

// Icons
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';

// import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
// import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// Components
// Micro 
import ColorsButton from '../../../micro/buttons/colorsButton/';
// Tools
import NewsLetterSubscribe from '../../../micro/editorElements/forms/newsLetterSubscribe/';
import * as forms from '../../../micro/editorElements/forms/newsLetterSubscribe/baseLayout.json';
// Generate IDs
import {v4 as uuidv4} from 'uuid';


const EditorLandingPage = (props) =>{
    const elements = props.editor.length > 0 && props.editor.map((el,i)=>{
        if(el.component === 'NewsLetterSubscribe'){
            let id = el.id;
            return <NewsLetterSubscribe key={id} id={id} contents={el.template.content}/>;
        }
        return <span ></span>;
    });
    

    return(<div className='editor'>
        <div className='tools'>
            <Button className='tool' onClick={()=>{
                let elements=forms[0];
                props.AddElement(elements,uuidv4())}
                }>
                <AssignmentIcon/>
                <h2>Form</h2>
            </Button>
            <Button className='tool'>
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
        <div className='canvas'>
            <div className='canvas_header'>
                 <form>
                     <InputLabel>Escala: </InputLabel>
                    <Select
                    value={100}
                    >
                        <MenuItem value={50}>50%</MenuItem>
                        <MenuItem value={100}>100%</MenuItem>
                        <MenuItem value={200}>200%</MenuItem>
                    </Select>
                 </form>
                 {/* <div className='breakpoints'>
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
                 </div> */}
            </div>
            <div className='canvas_canvas'>
                <div id='canvas' className='canvas_editor_landingPage'>
                    {elements}
                </div>
            </div>
            <div className='canvas_footer'>
                <ColorsButton label='Descartar' classes='blue'/>
                <ColorsButton label='Guardar' classes='green'/>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => ({
    editor : state.editor
});


export default connect(mapStateToProps,{
    AddElement
})(EditorLandingPage);