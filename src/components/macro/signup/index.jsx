import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// Components
// Micro 
import ColorsButton from '../../micro/buttons/colorsButton/';
import SocialMediaButton from '../../micro/buttons/socialMediaButton';


const Signup = (props) =>{
    return(<Modal open={props.isOpen} onClose={props.onClose} className='modal_signup'>
       <Paper className='signupForm_holder'>
             <h2>Registrate: </h2>
             <form>
                <TextField label='Nombre' className='login_form'/>
                <TextField label='Apellidos' className='login_form'/>
                <TextField label='Email' className='login_form'/>
                <TextField label='Contraseña' type='password' className='login_form'/>
                <ColorsButton label='Registro' classes='green wide'/>
             </form>
             <h3><span>Tambien puedes :</span></h3>
             <SocialMediaButton label={'Iniciar sesion con Facebook'} type='facebook'/>
             <SocialMediaButton label={'Iniciar sesion con Google'} type='google'/>
        </Paper>
    </Modal>);
}

export default Signup;