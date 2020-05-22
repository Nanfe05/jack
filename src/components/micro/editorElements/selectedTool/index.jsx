import React,{Fragment} from 'react';
// Material UI
// import LoopIcon from '@material-ui/icons/Loop';

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
            
            EditObject('left',(element.offsetLeft )+'px','top',(element.offsetTop )+'px');
            document.onmouseup = null;
            document.onmousemove = null;
        }
}

const ScaleObject = (e,id,EditObject) =>{
    e.preventDefault();

        //SelectedObject(id);

        let posx1, posx2, posy1,posy2 = 0;
        let scale = {x:1,y:1}
        posx1= e.clientX;
        posy1=e.clientY;


        const element = document.getElementById(id);
        
        // element.classList.add('selected');
        if(element.style.position !== 'absolute'){
            element.style.position= 'absolute';
        }

        document.onmousemove=(e)=>{
            e.preventDefault();
            
            posx2=posx1-e.clientX;
            posy2=posy1-e.clientY;
            posx1=e.clientX;
            posy1=e.clientY;
            if(posx2>0){
                scale.x -= 0.02;
            }else if(posx2<0){
                scale.x += 0.02;
            }
            if(posy2>0){
                scale.y -= 0.02;
            }else if(posy2<0){
                scale.y += 0.02;
            }
            element.style.transformOrigin='0.5 0.5';
            let otherTrasform = TransformAttributes(element,'scale');
            console.log(`scale(${scale.x},${scale.y} ${otherTrasform})`);
            element.style.transform=`scale(${scale.x},${scale.y}) ${otherTrasform}`;
            //element.style.top= (element.offsetTop - posy2)+'px';
            //element.style.left= (element.offsetLeft - posx2 )+'px';
        };
        document.onmouseup=(e)=>{
        let otherTrasform = TransformAttributes(element,'scale');
        EditObject('transform',`scale(${scale.x},${scale.y}) ${otherTrasform}`);
        document.onmouseup = null;
        document.onmousemove = null;
        }
};

const RotateObject = (e,id,EditObject) =>{
    e.preventDefault();

    //SelectedObject(id);

    let posx1, posx2/*, posy1,posy2*/,angle = 0;
    posx1= e.clientX;
    //posy1=e.clientY;

    // Rotate value
    // if(e.style.transform){

    // }

    const element = document.getElementById(id);
    
    // element.classList.add('selected');
    if(element.style.position !== 'absolute'){
        element.style.position= 'absolute';
    }

    document.onmousemove=(e)=>{
        e.preventDefault();
        
        posx2=posx1-e.clientX;
        //posy2=posy1-e.clientY;
        posx1=e.clientX;
        //posy1=e.clientY;
        // let v1 = {x:1, y:1};
        // let v2 = {x:posx2,y:posy2};
        // let angleRad = Math.acos( (v1.x * v2.x + v1.y * v2.y) / ( Math.sqrt(v1.x*v1.x + v1.y*v1.y) * Math.sqrt(v2.x*v2.x + v2.y*v2.y) ) );
        // let angleDeg = angleRad * 180 / Math.PI;
        //console.log(angleRad);
        if(posx2>0){
            angle -= 10;
        }else if(posx2<0){
            angle += 10;
        }
        if(Math.abs(angle)>360){
            angle=0;
        }
        element.style.transformOrigin='0.5 0.5';
        let otherTrasform = TransformAttributes(element,'rotate');
        element.style.transform=`rotate(${angle}deg) ${otherTrasform}`;
        // console.log('vector 1:',v1);
        // console.log('vector 2:',v2);
        // console.log(angleRad);
        //console.log(angle);
        //console.log('Vector 2:',`${posx2},${posy2}`);
        // element.style.top= (element.offsetTop - posy2)+'px';
        // element.style.left= (element.offsetLeft - posx2 )+'px';
    };
    document.onmouseup=(e)=>{
        let otherTrasform = TransformAttributes(element,'rotate');
        EditObject('transform',`rotate(${angle}deg) ${otherTrasform}`);
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

const SelectedTool = (props) =>{
    return(<Fragment>
        <div className='selected_tool_border'
        onMouseDown={(e)=>MoveObject(e,props.id,props.EditObject)}
        ></div>
        <div className='selected_tool_rotate'
        onMouseDown={(e)=>RotateObject(e,props.id,props.EditObject)}></div>
        {/* <div className='selected_tool_move'></div> */}
        <div className='selected_tool_scale scale_1'
        onMouseDown={(e)=>ScaleObject(e,props.id,props.EditObject)}
        ></div>
        <div className='selected_tool_scale scale_2'
         onMouseDown={(e)=>ScaleObject(e,props.id,props.EditObject)}></div>
        <div className='selected_tool_scale scale_3'
         onMouseDown={(e)=>ScaleObject(e,props.id,props.EditObject)}></div>
        <div className='selected_tool_scale scale_4'
         onMouseDown={(e)=>ScaleObject(e,props.id,props.EditObject)}></div>
    </Fragment>);
};


export default connect(null,{
    EditObject
})(SelectedTool);