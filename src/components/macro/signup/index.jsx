import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// Components
// Micro 
import ColorsButton from '../../micro/buttons/colorsButton/';
import SocialMediaButton from '../../micro/buttons/socialMediaButton';
// Redux
import {connect} from 'react-redux';
import {SignInFormChange,SignInFormClear} from '../../../redux/actions/form';
import {SwitchLoading,SetErrorsMsg,SetSuccessMsg,UserNeedValidation} from '../../../redux/actions/uiGeneral';
// Server Communication
import axios from 'axios';

const timeout = 1000;


const OnFormSubmit = async (payload,Loading,ErrorMsgs,SuccessMsgs,ClearForm,ToValidate) =>{
    Loading();
    try{
        const token = await axios.post('/jackmarketing/auth/signin',payload,{
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



const Signup = (props) =>{
    const {
        form,
        SignInFormChange,
        SignInFormClear,
        SetErrorsMsg,
        SetSuccessMsg,
        SwitchLoading,
        UserNeedValidation
    } = props;

    return(<Modal open={props.isOpen} onClose={props.onClose} className='modal_signup'>
       <Paper className='signupForm_holder'>
             <h2>Registrate: </h2>
             <form>
                <TextField label='Nombre' className='login_form' value={form.name} onChange={(e)=>{
                    SignInFormChange({name:e.target.value});
                }}/>
                <TextField label='Apellidos' className='login_form' value={form.lastname} onChange={(e)=>{
                    SignInFormChange({lastname:e.target.value});
                }}/>
                <TextField label='Email' className='login_form' value={form.email} onChange={(e)=>{
                    SignInFormChange({email:e.target.value});
                }}/>
                <TextField label='Contraseña' type='password' className='login_form'value={form.pass} onChange={(e)=>{
                    SignInFormChange({pass:e.target.value});
                }}/>
                <ColorsButton label='Registro' classes='green wide' action={()=>{
                    OnFormSubmit(form,SwitchLoading,SetErrorsMsg,SetSuccessMsg,SignInFormClear,UserNeedValidation);
                }}/>
             </form>
             <h3><span>Tambien puedes :</span></h3>
             <SocialMediaButton label={'Iniciar sesion con Facebook'} type='facebook'/>
             <SocialMediaButton label={'Iniciar sesion con Google'} type='google'/>
        </Paper>
    </Modal>);
}

const mapStateToProps = state =>({
    form: state.forms.signin
});

export default connect(mapStateToProps,{
    SignInFormChange,
    SignInFormClear,
    SwitchLoading,
    SetErrorsMsg,
    SetSuccessMsg,
    UserNeedValidation
})(Signup);