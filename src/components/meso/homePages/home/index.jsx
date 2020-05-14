import React from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const HpHome = () =>{

    return(
        <div className='hp_home'>
            <Grid container >
                <Grid item md={4} className='holders'>
                    <Grid container className='signup_invitation'>
                    <h2>Marketing Automatizado Hecho Simple</h2>
                    <h3>Crea Paginas de Aterrizaje, haz email marketing, automatiza embudos de venta.</h3>
                    <h4>Registrate, es gratis.</h4>
                    <Button className='button_mult_signup'><img src='/assets/icons/f_logo_RGB-Hex-Blue_512.png.webp' 
                    className='signup_icon' alt='fc-register'/>Registrate con Facebook</Button>
                    <Button className='button_mult_signup'><img src='/assets/icons/g-logo.png' 
                    className='signup_icon' alt='g-register'/>Registrate con Google</Button>
                    <Button className='button_mult_signup'><div className='signup_icon'></div>Registrate con email</Button>
                    </Grid>
                </Grid>
                <Grid item md={8} className='holders'>
                    <img src='/assets/jpgs/21249.jpg' alt='marketing_image' className='mark_img'></img>
                </Grid>
            </Grid>
        </div>
    );
};

export default HpHome;