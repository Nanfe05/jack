import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

const SocialMediaButton = (props) =>{

    const noSM = <div className='signup_icon'></div>;
    const Fcbk = <img src='/assets/icons/f_logo_RGB-Hex-Blue_512.png.webp' className='signup_icon' alt='Facebook Button'/>;
    const Ggl = <img src='/assets/icons/g-logo.png' className='signup_icon' alt='Google Button'/>

    let type;
    if(props.type){
        if(props.type === 'facebook'){type=Fcbk;}
        else if(props.type === 'google'){type=Ggl;}
        else {type = noSM;}
    }else{
        type= noSM;
    }

return(<Button className='button_mult_signup' onClick={props.action} disabled>{type}{props.label}</Button>);
}

export default SocialMediaButton;