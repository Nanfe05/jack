import React from 'react';


// Material UI
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

// Components
// Micro 
import SearchBarBasic from '../../../micro/searchBarBasic/';
import LandingPagePreview from '../../../micro/landingpagePreview/';


const AddLandingPage = ()=>{

    return(
        <Button className='add_landing_page' onClick={()=>{
            window.open('/editor/landingpage','_blank');
        }}>
            <div className='add_landing_page'>
                <AddIcon/>
            </div>
        </Button>
    );
}


const DbLanding = () =>{
    return(
        <div className='dbLanding_holder'>
            <SearchBarBasic label='Busca tu landing page favorito'/>
            <div className='display_landingpages'>
                <h2>Landing Pages Medicos</h2>
                <div className='landingpages_holder'>
                    <LandingPagePreview/>
                    <LandingPagePreview/>
                    <LandingPagePreview/>
                </div>
                {/* <h2>Landing Pages Optin</h2>
                <div className='landingpages_holder'></div> */}
                <h2>Tus Landing Pages Creados</h2>
                <div className='landingpages_holder'>
                    <LandingPagePreview/>
                    <AddLandingPage/>
                </div>
            </div>
        </div>
    );
}


export default DbLanding;