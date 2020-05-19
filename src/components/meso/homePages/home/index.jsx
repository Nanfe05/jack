import React from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
// Components
// Micro 
import SocialMediaButton from '../../../micro/buttons/socialMediaButton';

const HpHome = () =>{

    return(
        <div className='hp_home'>
            <Grid container >
                <Grid item md={4} className='holders'>
                    <Grid container className='signup_invitation'>
                    <h2>Marketing Automatizado Hecho Simple</h2>
                    <h3>Crea Paginas de Aterrizaje, haz email marketing, automatiza embudos de venta.</h3>
                    <h4>Registrate, es gratis.</h4>
                    <SocialMediaButton label={'Registrate con Facebook'} type='facebook'/>
                    <SocialMediaButton label={'Registrate con Google'} type='google'/>
                    <SocialMediaButton label={'Registrate con email'}/>
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