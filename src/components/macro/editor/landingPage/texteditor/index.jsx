import React from 'react';

// Material UI
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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


const TextEditorTools = () =>{
    return(<div className='text_editor_toolbar'>
        <form className='tet font_family'>
                     <InputLabel>Fuente: </InputLabel>
                    <Select
                    value='Sans-Serif'
                    >
                        <MenuItem value={'Sans-Serif'}>Sans-Serif</MenuItem>
                        <MenuItem value={'Serif'}>Serif</MenuItem>
                        <MenuItem value={'Fixed Width'}>Fixed Width</MenuItem>
                    </Select>
        </form>
        <form className='tet font_size'>
                     <InputLabel>Tamano: </InputLabel>
                    <TextField />
        </form>
        <Button className='tet button'>
            <FormatBoldIcon/>
        </Button>
        <Button className='tet button'>
            <FormatItalicIcon/>
        </Button>
        <Button className='tet button'>
            <FormatUnderlinedIcon/>
        </Button>
        <Button className='tet button'>
            <FormatColorTextIcon/>
        </Button>
        <Button className='tet button'>
            <FormatColorFillIcon/>
        </Button>
       
        <Select
        value='align-center'
        className='tet select_align'
        >
            <MenuItem value={'align-left'}>
                <Button className='button'>
                    <FormatAlignLeftIcon/>
                </Button>
            </MenuItem>
            <MenuItem value={'align-center'}>
                <Button className='button'>
                    <FormatAlignCenterIcon/>
                </Button>
            </MenuItem>
            <MenuItem value={'align-right'}>
                <Button className='button'>
                    <FormatAlignRightIcon/>
                </Button>
            </MenuItem>
            <MenuItem value={'align-justify'}>
                <Button className='button'>
                    <FormatAlignJustifyIcon/>
                </Button>
            </MenuItem>
            
        </Select>
       
        <Button className='tet button'>
            <ListIcon/>
        </Button>
        <Button className='tet button'>
            <FormatListBulletedIcon/>
        </Button>
    </div>)
};

export default TextEditorTools;