import React,{Fragment} from 'react';



const SelectedTool = (props) =>{
    return(<Fragment>
        <div className='selected_tool_border'></div>
        <div className='selected_tool_rotate'></div>
        {/* <div className='selected_tool_move'></div> */}
        <div className='selected_tool_scale scale_1'></div>
        <div className='selected_tool_scale scale_2'></div>
        <div className='selected_tool_scale scale_3'></div>
        <div className='selected_tool_scale scale_4'></div>
    </Fragment>);
};


export default SelectedTool;