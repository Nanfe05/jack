import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// Components
import {Link} from 'react-router-dom';
// Micro 
import BlueButton from '../../micro/buttons/blue/';
import FbButton from '../../micro/buttons/facebook/';
import GButton from '../../micro/buttons/google/';

const Login = (props) =>{
    return(<Modal open={props.isOpen} onClose={props.onClose} className='modal_login'>
        <Paper className='loginForm_holder'>
             <h2>Inicio de Sesion</h2>
             <form>
                <TextField label='Email' className='login_form'/>
                <TextField label='Contraseña' type='password' className='login_form'/>
                <Link to='/dashboard'>
                    <BlueButton classes='wide' label='Inicio'/>
                </Link>
             </form>
             <h3><span>Tambien puedes :</span></h3>
             <FbButton label={'Iniciar sesion con Facebook'}/>
             <GButton label={'Iniciar sesion con Google'} />
        </Paper>
    </Modal>);
}

export default Login;