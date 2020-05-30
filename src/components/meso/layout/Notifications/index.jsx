import React from 'react';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';
//import MuiAlert from '@material-ui/lab/Alert';

// Redux
import {connect} from 'react-redux';
import {ClearErrorsMsg,ClearSuccessMsg} from '../../../../redux/actions/uiGeneral';
// Manage Id's
import { v4 as uuidv4 } from 'uuid';

// Success Item 
const AlertMsg = ({label, classes}) =>{
    return(
        <div className={`alert_msg ${classes}`}>
            {label}
        </div>
    );
}


const Notifications = ({
    notifications,
    ClearErrorsMsg,
    ClearSuccessMsg
}) =>{

    const isOpen = notifications.errors.length > 0 || notifications.success.length >0;

    const errors = notifications.errors.length > 0 ? notifications.errors.map((el)=>{
        return <AlertMsg label={el.msg} classes='error' key={uuidv4()}/>;
    }): <div></div>;

    const success = notifications.success.length > 0 ? notifications.success.map((el)=>{
        return <AlertMsg label={el.msg} classes='success' key={uuidv4()}/>;
    }): <div></div>;

    return(
        <Snackbar 
        open={isOpen} 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        autoHideDuration={4000}
        onClose={()=>{
            ClearErrorsMsg();
            ClearSuccessMsg();
        }}
        >
            <div>
                {errors}
                {success}
            </div>
        </Snackbar>
    );
};

const mapStateToProps = state =>({
    notifications: state.uiGeneral.notifications
});


export default connect(mapStateToProps,{
    ClearErrorsMsg,
    ClearSuccessMsg
})(Notifications);