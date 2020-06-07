import React, {useEffect,Fragment,useState} from 'react';

// Redux
import { connect } from 'react-redux';
import {switchLogin,switchSignup,
    SwitchLoading,SetSuccessMsg,SetErrorsMsg,UserNeedValidation,SwitchUserIsLogged,SetUserName
} from '../../../redux/actions/uiGeneral';

// Server Communication
const axios = require('axios').default;

const timeout=2000;


/*
VALIDATE TOKEN
*/
const ValidateToken = async (
    app,
    Loading,
    SuccessMsgs,
    ErrorMsgs,
    ToValidate,
    SetLogged,
    SetUser,
    SwitchLoginForm,
    SwitchSigninForm,
    SetFirstLoad
    ) =>{
    

    // Check if Token - Validate and Redirect
    let token =localStorage.getItem('x-jackMarketing-token'); 
    if(token){
        try{
            Loading();
            const user = await axios.post('/jackmarketing/auth/',{token},{
                headers:{
                    'content-type':'application/json'
                }
            });
            
            setTimeout(()=>{
                // Set Notifications
                if(user.data.success){
                    SuccessMsgs(user.data.success);
                }
                // If Valid Token set User is logged and info 
                SetLogged();
                SetUser(`${user.data.user.name} ${user.data.user.lastname}`);
                 // If user need validation turn it off
                 if(app.user.needValidation){
                    ToValidate();
                }
                if(app.loginForm){
                    SwitchLoginForm();
                }
                if(app.signupForm){
                    SwitchSigninForm();
                }
                Loading();
                SetFirstLoad(false);
            },timeout);


        }catch(err){
            let errors = err.response.data.errors;
            if(errors){
                // console.log(errors);
                setTimeout(()=>{
                    Loading();
                    ErrorMsgs(errors);
                    // If user need validation turn it off
                    if(app.user.needValidation){
                        ToValidate();
                    }
                   
                },timeout)
            }
            // Delete Token 
            localStorage.removeItem('x-jackMarketing-token');
            SetFirstLoad(false);
        }
     }else{
        SetFirstLoad(false);
     }
};


const Validate = (props) =>{
    const {
        user
        } = props.uiGeneral;
    const {
        switchLogin,
        switchSignup,
        SwitchLoading,
        SetSuccessMsg,
        SetErrorsMsg,
        UserNeedValidation,
        SwitchUserIsLogged,
        SetUserName
    } = props;

    // State to Control Just the first load of the site
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(()=>{
        if(!user.logged){
            ValidateToken(
                props.uiGeneral,
                SwitchLoading,
                SetSuccessMsg,
                SetErrorsMsg,
                UserNeedValidation,
                SwitchUserIsLogged,
                SetUserName,
                switchLogin,
                switchSignup,
                setFirstLoad
                );
        }
        // eslint-disable-next-line
    },[user.needValidation,firstLoad]);



    return(<Fragment>
        {firstLoad ? 
        <div></div>
        :
        props.children
    }
    </Fragment>);
};

const mapStateToProps = state => ({
    uiGeneral: state.uiGeneral
})


export default connect(mapStateToProps,{
    switchLogin,
    switchSignup,
    SwitchLoading,
    SetSuccessMsg,
    SetErrorsMsg,
    UserNeedValidation,
    SwitchUserIsLogged,
    SetUserName
})(Validate);