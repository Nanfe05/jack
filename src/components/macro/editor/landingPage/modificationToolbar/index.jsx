import React,{Fragment} from 'react';

// Redux
import {connect} from 'react-redux';
import {EditObject} from '../../../../../redux/actions/editor';

// Material UI
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ModificationToolbar = ({editor,EditObject}) =>{
    
    const itemSelected = editor.selected && editor.selected ?
        editor.objects.filter(el => el.id === editor.selected)[0]
        :
        null;
    const bk = editor.breakpoint;
    const layout = itemSelected.template.layout;                    
    
    return(
        <div className='tools modify'>
        <h3>Edit Tools</h3>
            <div className='col'>
                <h4>Dimensiones: </h4>
            <div className='row'>
                <TextField label='Altura' variant='outlined' className='edit_tool' value={layout[bk].height} onChange={(e)=>{
                    EditObject('height',e.target.value);
                }}/><h5>px</h5>
                <TextField label='Ancho' variant='outlined' className='edit_tool' value={layout[bk].width} onChange={(e)=>{
                    EditObject('width',e.target.value);
                }}/><h5>px</h5>
            </div>
            </div>
            <div className='col'>
                <h4 style={{width:"100%",textAlign:"left"}}>Borde:</h4>
                <div className='row'>
                    <Select value={layout[bk].border} onChange={(e)=>{
                        EditObject('border',e.target.value);
                    }}>
                        <MenuItem value='none'>None</MenuItem>
                        <MenuItem value='solid'>Solid</MenuItem>
                    </Select>
                    {layout[bk].border !== 'none' &&
                    <Fragment>
                        <TextField label='Grosor' variant='outlined' className='edit_tool' value={`${layout[bk].border_width}`} onChange={(e)=>{
                    EditObject('border_width',e.target.value);
                    }}/><h5>px</h5> 
                        <TextField variant='outlined' className='edit_tool' type='color' value={`${layout[bk].border_color}`}onChange={(e)=>{
                    EditObject('border_color',e.target.value);
                    }}/>
                    </Fragment>
                    }
                  
                </div>
            </div>
            <div className='col'>
                <h4>Fondo: </h4>
                <div className='row'>
                    <Select value={layout[bk].background} onChange={(e)=>{
                        EditObject('background',e.target.value);
                    }}>
                        <MenuItem value='none'>None</MenuItem>
                        <MenuItem value='color'>Color</MenuItem>
                        <MenuItem value='gradient'>Gradient</MenuItem>
                    </Select>
                    {layout[bk].background === 'gradient' &&
                            <Select value={layout[bk].b_gradient_style} onChange={(e)=>{
                                EditObject('b_gradient_style',e.target.value);
                            }}>
                                <MenuItem value='linear'>Linear</MenuItem>
                                <MenuItem value='radial'>radial</MenuItem>
                            </Select>
                    }
                    {layout[bk].background !== 'none' &&
                        <TextField variant='outlined' className='edit_tool' type='color' value={layout[bk].background_color_1}
                        onChange={(e)=>{
                            EditObject('background_color_1',e.target.value);
                        }}/>
                    }
                    {layout[bk].background === 'gradient' &&
                        <TextField variant='outlined' className='edit_tool' type='color' value={layout[bk].background_color_2}
                        onChange={(e)=>{
                            EditObject('background_color_2',e.target.value);
                        }}/>
                    }
                  
                </div>
            </div>
            <div className='col'>
                <h4>Padding: </h4>
                <div className='row'>
                    <TextField label='Padding' variant='outlined' className='edit_tool' 
                    value={`${layout[bk].padding}`} onChange={(e)=>{
                        EditObject('padding',e.target.value);
                    }}/><h5>px</h5>
            </div>
            </div>
            <h3>Transform Tools</h3>
            <div className='col'>
                <h4>Transladar</h4>
                <div className='row'>
                    <h5>From Left:</h5><TextField label='X' variant='outlined' className='edit_tool'
                    value={layout[bk].position_left} onChange={(e)=>{
                        EditObject('position_left',e.target.value);
                    }}
                    /><h5>px</h5>
                </div>
                <div className='row'>
                    <h5>From Left:</h5><TextField label='Y' variant='outlined' className='edit_tool'
                    value={layout[bk].position_top} onChange={(e)=>{
                        EditObject('position_top',e.target.value);
                    }}
                    /><h5>px</h5>
                </div>
            </div>
            <div className='col'>
                <h4>Rotacion</h4>
                <div className='row'>
                    <TextField label='Degrees' variant='outlined' className='edit_tool'
                    value={layout[bk].rotation} onChange={(e)=>{
                        EditObject('rotation',e.target.value);
                    }}
                    />
                </div>
            </div>
            <div className='col'>
                <h4>Escala</h4>
                <div className='row'>
                    <TextField label='X' variant='outlined' className='edit_tool'
                    value={layout[bk].scale_x} onChange={(e)=>{
                        EditObject('scale_x',e.target.value);
                    }}
                    />
                    <TextField label='Y' variant='outlined' className='edit_tool'
                    value={layout[bk].scale_y} onChange={(e)=>{
                        EditObject('scale_y',e.target.value);
                    }}
                    />
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <TextField label='Z-Index' variant='outlined' className='edit_tool'
                    value={layout[bk].z_index} onChange={(e)=>{
                        EditObject('z_index',e.target.value);
                    }}/>
                </div>
            </div>
    </div>
    );
}

export default connect(null,{EditObject})(ModificationToolbar);