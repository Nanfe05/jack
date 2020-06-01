import React,{Fragment} from 'react';
// Redux 
import {connect} from 'react-redux';
import {EditObject} from '../../../../redux/actions/editor';

const TransformAttributes = (element, toAvoid) =>{
    return element.style.transform.replace(/\s/g,'').replace(/s/g,' s').replace(/r/g,' r').split(' ').filter((el)=>!el.includes(toAvoid)).join(' ');
}

const MoveObject = (e,id,EditObject) =>{
        e.preventDefault();

        let posx1, posx2, posy1,posy2 = 0;
        posx1= e.clientX;
        posy1=e.clientY;


        const element = document.getElementById(id);
        
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
            
            EditObject('position_left',(element.offsetLeft ),'position_top',(element.offsetTop ));
            document.onmouseup = null;
            document.onmousemove = null;
        }
}

const ResizeObject = (e,id,EditObject) =>{
    e.preventDefault();

        const element = document.getElementById(id);

        let posx1, posx2, posy1,posy2 = 0;
        let size = {
            x:element.clientWidth,
            y:element.clientHeight}
        posx1= e.clientX;
        posy1=e.clientY;
        
        if(element.style.position !== 'absolute'){
            element.style.position= 'absolute';
        }

        document.onmousemove=(e)=>{
            e.preventDefault();
            
            posx2=posx1-e.clientX;
            posy2=posy1-e.clientY;
            posx1=e.clientX;
            posy1=e.clientY;
            
                size.x -= posx2;
                size.y -= posy2;
 
            element.style.width = `${size.x}px`;
            element.style.height = `${size.y}px`;

        };
        document.onmouseup=(e)=>{
        EditObject('height',size.y,'width',size.x);
        document.onmouseup = null;
        document.onmousemove = null;
        }
};

const RotateObject = (e,id,EditObject) =>{
    e.preventDefault();

    let posx1, posx2/*, posy1,posy2*/ = 0;
    posx1= e.clientX;

    let angle = 0;

    const element = document.getElementById(id);
    
    if(element.style.position !== 'absolute'){
        element.style.position= 'absolute';
    }

    document.onmousemove=(e)=>{
        e.preventDefault();
        
        posx2=posx1-e.clientX;
        //posy2=posy1-e.clientY;
        posx1=e.clientX;
        //posy1=e.clientY;

        angle -= posx2 ;
       
        if(Math.abs(angle)>360){
            angle=0;
        }
        element.style.transformOrigin='0.5 0.5';
        let otherTrasform = TransformAttributes(element,'rotate');
        element.style.transform=`rotate(${angle}deg) ${otherTrasform}`;
       
    };
    document.onmouseup=(e)=>{
        EditObject('rotation',angle);
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

const SelectedTool = (props) =>{
    return(<Fragment >
        <div className='selected_tool_border'
        onMouseDown={(e)=>MoveObject(e,props.id,props.EditObject)}
        ></div>
        <div className='selected_tool_rotate'
        onMouseDown={(e)=>RotateObject(e,props.id,props.EditObject)}></div>
        {/* <div className='selected_tool_move'></div> */}
        {/* <div className='selected_tool_scale scale_1'
        onMouseDown={(e)=>ResizeObject(e,props.id,props.EditObject)}
        ></div>
        <div className='selected_tool_scale scale_2'
         onMouseDown={(e)=>ResizeObject(e,props.id,props.EditObject)}></div>
        <div className='selected_tool_scale scale_3'
         onMouseDown={(e)=>ResizeObject(e,props.id,props.EditObject)}></div> */}
        <div className='selected_tool_scale scale_4'
         onMouseDown={(e)=>ResizeObject(e,props.id,props.EditObject)}></div>
    </Fragment>);
};


export default connect(null,{
    EditObject
})(SelectedTool);