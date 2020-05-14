import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// Components
// Micro 
import GreenButton from '../../micro/buttons/green/';
import FbButton from '../../micro/buttons/facebook/';
import GButton from '../../micro/buttons/google/';


const Signup = (props) =>{
    return(<Modal open={props.isOpen} onClose={props.onClose} className='modal_signup'>
       <Paper className='signupForm_holder'>
             <h2>Registrate: </h2>
             <form>
                <TextField label='Nombre' className='login_form'/>
                <TextField label='Apellidos' className='login_form'/>
                <TextField label='Email' className='login_form'/>
                <TextField label='Contraseña' type='password' className='login_form'/>
                <GreenButton classes='wide' label='Registro'/>
             </form>
             <h3><span>Tambien puedes :</span></h3>
             <FbButton label={'Registrarte con Facebook'}/>
             <GButton label={'Registrarte con Google'} />
        </Paper>
    </Modal>);
}

export default Signup;