import React from 'react';
// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

const Login = (props) =>{
    return(<Modal open={props.isOpen} onClose={props.onClose}>
        <Paper>
            <p>Login</p>
        </Paper>
    </Modal>);
}

export default Login;