import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewsLetterSubscribe = () =>{
    return(<div>
        <Paper elevation={2}>
            <form>
                <h2>Subcribete</h2>
                <TextField label='Nombre'/>
                <TextField label='Email'/>
                <Button>
                    Suscribirse !
                </Button>
            </form>
        </Paper>
    </div>);
}

export default NewsLetterSubscribe;