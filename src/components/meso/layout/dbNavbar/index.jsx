import React from 'react';
// React Router
import {useHistory} from 'react-router-dom';
// Components 
import NavButton from '../../../micro/navButton/';

const DashBoardNavBar = () =>{

    let history = useHistory();

    return(
        <div className='db_navbar'>
            <NavButton label='Crear Embudo' icon={'/assets/icons/Refresh_Icon.svg'} disabled={true} action={()=>history.push('/dashboard/funnelchannel')}/>
            <NavButton label='Disena una Imagen' icon={'/assets/icons/Landscape_Icon.svg'} disabled={true} action={()=>history.push('/dashboard/images')}/>
            <NavButton label='Crear una pauta' icon={'/assets/icons/Ad_Icon.svg'} disabled={true} action={()=>history.push('/dashboard/pauta')}/>
            <NavButton label='Crear Landing' icon={'/assets/icons/Casette_Icon.svg'} disabled={false} action={()=>history.push('/dashboard/landingpage')}/>
            <NavButton label='Haz Email Marketing' icon={'/assets/icons/Email_Icon.svg'} disabled={true} action={()=>history.push('/dashboard/emailmarketing')}/>
        </div>
    );
};

export default DashBoardNavBar;