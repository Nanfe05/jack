import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';


const GreenButton = (props) =>{
    return(
        <Button className={`signup_button ${props.classes && props.classes}`} onClick={props.action}>
            {props.label}
        </Button>
    );
}


export default GreenButton;