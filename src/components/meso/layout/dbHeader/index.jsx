import React from 'react';

// Components
// Micro 
import Logo from '../../../micro/logo/';
import GreenButton from '../../../micro/buttons/green';

const DashBoardHeader = () =>{
    return(<div className='dashboard_header'>
        <Logo classes='white' icon={'white'}/>
        <GreenButton label='Hazte Premium'/>
    </div>);
}

export default DashBoardHeader;