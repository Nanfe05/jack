import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';


const BlueButton = (props) =>{
    return(
        <Button className={`blue_button ${props.classes && props.classes}`} onClick={props.action}>
           {props.label}
        </Button>
    );
}


export default BlueButton;