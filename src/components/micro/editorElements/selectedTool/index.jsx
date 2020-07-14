import React,{Fragment} from 'react';
// Redux 
import {connect} from 'react-redux';
import {EditObject} from '../../../../redux/actions/editor';

const TransformAttributes = (element, toAvoid) =>{
    return element.style.transform.replace(/\s/g,'').replace(/s/g,' s').replace(/r/g,' r').split(' ').filter((el)=>!el.includes(toAvoid)).join(' ');
}

const MoveObject = (e,id,EditObject,breakpoint,sizes) =>{
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
            
            let decimalPlaces = 2;

            posx2=posx1-e.clientX;
            posy2=posy1-e.clientY;
            posx1=e.clientX;
            posy1=e.clientY;

            let posicionY= element.offsetTop - posy2;
            let posicionX = element.offsetLeft - posx2;

            let totalX = sizes[breakpoint].width;
            let totalY = sizes[breakpoint].height;

            let percentageX = ((posicionX*100)/totalX).toFixed(decimalPlaces);
            let percentageY = ((posicionY*100)/totalY).toFixed(decimalPlaces);

            element.style.top= percentageY+'%';
            element.style.left= percentageX+'%';
            // element.style.top= (element.offsetTop - posy2)+'px';
            // element.style.left= (element.offsetLeft - posx2 )+'px';

        };
        document.onmouseup=(e)=>{
            let decimalPlaces = 2;
            
            let posicionY= element.offsetTop ;
            let posicionX = element.offsetLeft ;

            let totalX = sizes[breakpoint].width;
            let totalY = sizes[breakpoint].height;

            let percentageX = ((posicionX*100)/totalX).toFixed(decimalPlaces);
            let percentageY = ((posicionY*100)/totalY).toFixed(decimalPlaces);



            EditObject('position_left',(percentageX ),'position_top',(percentageY ));
            document.onmouseup = null;
            document.onmousemove = null;
        }
}

const ResizeObject = (e,id,EditObject,breakpoint,sizes) =>{
    e.preventDefault();

        const element = document.getElementById(id);

        let decimalPlaces = 2;
        let totalX = sizes[breakpoint].width;
        let totalY = sizes[breakpoint].height;

        let posx1, posx2, posy1,posy2 = 0;
        let size = {
            x:((element.clientWidth*100)/totalX).toFixed(decimalPlaces),
            y: ((element.clientHeight*100)/totalY).toFixed(decimalPlaces)}
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
            
            let percentageX = ((posx2*100)/totalX).toFixed(decimalPlaces);
            let percentageY = ((posy2*100)/totalY).toFixed(decimalPlaces);

                // size.x -= posx2;
                // size.y -= posy2;
                size.x -= percentageX;
                size.y -= percentageY;

            element.style.width = `${size.x}%`;
            element.style.height = `${size.y}%`;

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
        onMouseDown={(e)=>MoveObject(e,props.id,props.EditObject,props.breakpoint,props.sizes)}
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
         onMouseDown={(e)=>ResizeObject(e,props.id,props.EditObject,props.breakpoint,props.sizes)}></div>
    </Fragment>);
};

const mapStateToProps = state =>({
    breakpoint: state.editor.breakpoint,
    sizes: state.editor.sizes
});

export default connect(mapStateToProps,{
    EditObject
})(SelectedTool);