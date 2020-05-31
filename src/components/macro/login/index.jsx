import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// Micro 
import ColorsButton from '../../micro/buttons/colorsButton/';
import SocialMediaButton from '../../micro/buttons/socialMediaButton';
// Redux 
import {connect} from 'react-redux';
import {LogInFormChange,LogInFormClear} from '../../../redux/actions/form';
import {SwitchLoading,SetErrorsMsg,SetSuccessMsg,UserNeedValidation} from '../../../redux/actions/uiGeneral';
// Server Communication
import axios from 'axios';

const timeout = 1000;


const OnFormSubmit = async (payload,Loading,ErrorMsgs,SuccessMsgs,ClearForm,ToValidate) =>{
    Loading();
    try{
        const token = await axios.post('/jackmarketing/auth/login',payload,{
            headers:{
                'content-type':'application/json'
            }
        })
        if(token.data.token){
            setTimeout(()=>{
                Loading();
                // Set Success Messages
                if(token.data.success){
                    SuccessMsgs(token.data.success);
                }
                // Set Token in LocalStorage 
                    localStorage.setItem('x-jackMarketing-token',token.data.token);
                // Need to validate
                    ToValidate();
                // Clear Form
                    ClearForm();
            },timeout)
        }
    }catch(err){
        let errors = err.response.data.errors;
        if(errors){
            console.log(errors);
            setTimeout(()=>{
                Loading();
                ErrorMsgs(errors);
            },timeout)
        }
        
    }

};




const Login = (props) =>{
    const {
        form,
        LogInFormChange,
        LogInFormClear,
        SetErrorsMsg,
        SetSuccessMsg,
        SwitchLoading,
        UserNeedValidation
    } = props;

    return(<Modal open={props.isOpen} onClose={props.onClose} className='modal_login'>
        <Paper className='loginForm_holder'>
             <h2>Inicio de Sesion</h2>
             <form>
                <TextField label='Email' className='login_form' value={form.email} onChange={(e)=>{
                    LogInFormChange({email:e.target.value});
                }}/>
                <TextField label='Contraseña' type='password' className='login_form' value={form.pass} onChange={(e)=>{
                    LogInFormChange({pass:e.target.value});
                }}/>
                
                <ColorsButton label='Inicio' classes='blue wide' action={()=>{
                    OnFormSubmit(form,SwitchLoading,SetErrorsMsg,SetSuccessMsg,LogInFormClear,UserNeedValidation);
                }}/>
                
             </form>
             <h3><span>Tambien puedes :</span></h3>
             <SocialMediaButton label={'Iniciar sesion con Facebook'} type='facebook'/>
             <SocialMediaButton label={'Iniciar sesion con Google'} type='google'/>
        </Paper>
    </Modal>);
}

const mapStateToProps = state =>({
    form: state.forms.login
});

export default connect(mapStateToProps,{
    LogInFormChange,
    LogInFormClear,
    SwitchLoading,
    SetErrorsMsg,
    SetSuccessMsg,
    UserNeedValidation
})(Login);