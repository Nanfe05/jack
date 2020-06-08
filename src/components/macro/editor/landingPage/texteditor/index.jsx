import React from 'react';

// Redux 
import {connect} from 'react-redux';

// Material UI
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// Icons
//import TextFieldsIcon from '@material-ui/icons/TextFields';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ListIcon from '@material-ui/icons/List';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';



const TextEditorTools = (props) =>{

    const {textEditor} = props;
    // const itemSelected = document.getElementById(`${props.selected}_content_editable`);

    return(<div className='text_editor_toolbar'>
        <form className='tet font_family'>
                     <InputLabel>Fuente: </InputLabel>
                    <Select
                    value={textEditor.fontFamily || ''}
                    onChange={(e)=>{
                        document.execCommand('fontName',false,e.target.value);
                    }}
                    >
                        <MenuItem value={'Roboto'} style={{fontFamily:'Roboto'}}>Roboto</MenuItem>
                        <MenuItem value={'Tillana'} style={{fontFamily:'Tillana'}}>Tillana</MenuItem>
                        <MenuItem value={'Stalemate'} style={{fontFamily:'Stalemate'}}>Stalemate</MenuItem>
                        <MenuItem value={'Snippet'} style={{fontFamily:'Snippet'}}>Snippet</MenuItem>
                        <MenuItem value={'East Sea Dokdo'} style={{fontFamily:'East Sea Dokdo'}}>East Sea Dokdo</MenuItem>
                        <MenuItem value={'Baloo Tammudu 2'} style={{fontFamily:'Baloo Tammudu 2'}}>Baloo Tammudu 2</MenuItem>
                        <MenuItem value={'Tenali Ramakrishna'} style={{fontFamily:'Tenali Ramakrishna'}}>Tenali Ramakrishna</MenuItem>
                        <MenuItem value={'Open Sans'} style={{fontFamily:'Open Sans'}}>Open Sans</MenuItem>
                        <MenuItem value={'Montserrat'} style={{fontFamily:'Montserrat'}}>Montserrat</MenuItem>
                        <MenuItem value={'Raleway'} style={{fontFamily:'Raleway'}}>Raleway</MenuItem>
                        <MenuItem value={'Architects Daughter'} style={{fontFamily:'Architects Daughter'}}>Architects Daughter</MenuItem>
                        <MenuItem value={'Dancing Script'} style={{fontFamily:'Dancing Script'}}>Dancing Script</MenuItem>
                        <MenuItem value={'Indie Flower'} style={{fontFamily:'Indie Flower'}}>Indie Flower</MenuItem>
                        <MenuItem value={'Source Code Pro'} style={{fontFamily:'Source Code Pro'}}>Source Code Pro</MenuItem>
                        <MenuItem value={'Pacifico'} style={{fontFamily:'Pacifico'}}>Pacifico</MenuItem>
                        <MenuItem value={'Hind'} style={{fontFamily:'Hind'}}>Hind</MenuItem>
                        <MenuItem value={'serif'} style={{fontFamily:'serif'}}>Serif</MenuItem>
                    </Select>
        </form>
        <form className='tet font_size'>
                     <InputLabel>Tamaño: </InputLabel>
                     <Select
                    value={textEditor.fontSize}
                    onChange={(e)=>{
                        document.execCommand('fontSize',false,e.target.value);
                    }}
                    >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                        <MenuItem value={'6'}>6</MenuItem>
                        <MenuItem value={'7'}>7</MenuItem>
                    </Select>
        </form>
        <Button className={`tet button ${textEditor.fontWeight === '700' || textEditor.fontWeight === 'bold'?'selected':''}`} onClick={()=>{
            document.execCommand('bold');
        }
        }>
            <FormatBoldIcon/>
        </Button>
        <Button className={`tet button ${textEditor.fontStyle.includes('italic') ?'selected':''}`} onClick={()=>{
            document.execCommand('italic');
        }
        }>
            <FormatItalicIcon/>
        </Button>
        <Button className={`tet button ${textEditor.fontUnderline.includes('underline') ?'selected':''}`} onClick={()=>{
            document.execCommand('underline');
        }
        }>
            <FormatUnderlinedIcon/>
        </Button>
        <Button className='tet button'  
        onClick={()=>{   
            let colorP = document.getElementById('color_picker_text');
            colorP.click();
        }}
        >
            <FormatColorTextIcon style={{color:`${textEditor.fontColor}`}}/>
        </Button>
        <input type='color' id='color_picker_text' style={{display:'none'}} onChange={(e)=>{
            document.execCommand('foreColor',false,e.target.value);
        }}/>
        <Button className='tet button' onClick={()=>{
            
            let colorP = document.getElementById('color_picker_bg');
            colorP.click();
        }}
        >
            <FormatColorFillIcon style={{color:`${textEditor.fontBgColor === 'rgba(0, 0, 0, 0)'?'black':textEditor.fontBgColor}`}}/>
        </Button>
        <input type='color' id='color_picker_bg' style={{display:'none'}} onChange={(e)=>{
            document.execCommand('backColor',false,e.target.value);
        }}/>
        <Select
        value={textEditor.fontAlign.includes('center')?'align-center':
                textEditor.fontAlign.includes('left')?'align-left':
                textEditor.fontAlign.includes('right')?'align-right':
                textEditor.fontAlign.includes('justify')?'align-justify':
                'align-left'}
        className='tet select_align'
        >
            <MenuItem value={'align-left'}>
                <Button className='button' onClick={()=>{
                    document.execCommand('justifyLeft');
                }
                }>
                    <FormatAlignLeftIcon />
                </Button>
            </MenuItem>
            <MenuItem value={'align-center'}>
                <Button className='button'  onClick={()=>{
                    document.execCommand('justifyCenter');
                }
                }>
                    <FormatAlignCenterIcon/>
                </Button>
            </MenuItem>
            <MenuItem value={'align-right'}>
                <Button className='button'  onClick={()=>{
                    document.execCommand('justifyRight');
                }
                }>
                    <FormatAlignRightIcon/>
                </Button>
            </MenuItem>
            <MenuItem value={'align-justify'}>
                <Button className='button' onClick={()=>{
                    document.execCommand('justifyFull');
                }
                }>
                    <FormatAlignJustifyIcon/>
                </Button>
            </MenuItem>
            
        </Select>
       
        <Button className={`tet button ${textEditor.ListStyle.includes('decimal') ?'selected':''}`} onClick={()=>{
                    document.execCommand('insertOrderedList');
                }
                }>
            <ListIcon/>
        </Button>
        <Button className={`tet button ${textEditor.ListStyle.includes('circle') ?'selected':''}`} onClick={()=>{
                    document.execCommand('insertUnorderedList');
                }
                }>
            <FormatListBulletedIcon/>
        </Button>
    </div>)
};

const mapStateToProps = state =>({
    selected: state.editor.selected,
    textEditor : state.textEditor
});

export default connect(mapStateToProps)(TextEditorTools);