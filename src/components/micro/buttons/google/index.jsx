import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

const GButton = (props) =>{
    return(<Button className='button_mult_signup'><img src='/assets/icons/g-logo.png' 
className='signup_icon' alt='g-register'/>{props.label}</Button>);
}

export default GButton;