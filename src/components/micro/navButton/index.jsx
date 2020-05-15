import React from 'react';

// Material UI
import Button from '@material-ui/core/Button'; 

const NavButton = (props) =>{
    return(
        <Button className='navbar_button' disabled={props.disabled} onClick={props.action}>
            {props.icon ? <div className={`db_navbar_icon ${props.disabled && 'disabled'}`} style={{maskImage:`url(${props.icon})`}}></div>://<img src={props.icon} alt='navbar_icon' className='db_navbar_icon'/>:
            <div className='db_navbar_icon'></div>}
            {props.label}
        </Button>
    );
}


export default NavButton;