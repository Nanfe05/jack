import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// Components
import {Link} from 'react-router-dom';
// Micro 
import ColorsButton from '../../micro/buttons/colorsButton/';
import SocialMediaButton from '../../micro/buttons/socialMediaButton';

const Login = (props) =>{
    return(<Modal open={props.isOpen} onClose={props.onClose} className='modal_login'>
        <Paper className='loginForm_holder'>
             <h2>Inicio de Sesion</h2>
             <form>
                <TextField label='Email' className='login_form'/>
                <TextField label='Contraseña' type='password' className='login_form'/>
                <Link to='/dashboard' onClick={()=>{
                    props.onClose();
                    props.switchIsUserLogged();
                    localStorage.setItem('JackIsUserLogged',true);
                }}>
                    <ColorsButton label='Inicio' classes='blue wide'/>
                </Link>
             </form>
             <h3><span>Tambien puedes :</span></h3>
             <SocialMediaButton label={'Iniciar sesion con Facebook'} type='facebook'/>
             <SocialMediaButton label={'Iniciar sesion con Google'} type='google'/>
        </Paper>
    </Modal>);
}

export default Login;