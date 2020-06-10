import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';


const ColorsButton = (props) =>{
    return(
        <Button className={`colors_button ${props.classes && props.classes}`} onClick={props.action} disabled={props.disabled}>
           {props.label}
        </Button>
    );
}


export default ColorsButton;