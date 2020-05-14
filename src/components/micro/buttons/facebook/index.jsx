import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

const FbButton = (props) =>{
    return(<Button className='button_mult_signup'><img src='/assets/icons/f_logo_RGB-Hex-Blue_512.png.webp' 
    className='signup_icon' alt='fc-register'/>{props.label}</Button>);
}

export default FbButton;