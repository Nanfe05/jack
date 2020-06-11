import React,{useEffect,Fragment} from 'react';

//Redux
import {connect} from 'react-redux';
import {
    UIaddLandingPages,
    SetErrorsMsg,
    SetSuccessMsg,
    UIisLoadedLandingPages
} from '../../../../redux/actions/uiGeneral';
// Material UI
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

// Components
// Micro 
import SearchBarBasic from '../../../micro/searchBarBasic/';
import LandingPagePreview from '../../../micro/landingpagePreview/';
// Unique IDs
import { v4 as uuidv4 } from 'uuid';
// Server Communication
const axios = require('axios');

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

const GetLandingPages = async(
    UIaddLandingPages,
    SetErrorsMsg,
    SetSuccessMsg,
    UIisLoadedLandingPages
) =>{
    
    try{
        let obj = {
            token: localStorage.getItem('x-jackMarketing-token')
        }
        let headers={
            'content-type':'application/json',
        }
        const lps = await axios.post('/jackmarketing/landingpage/getall',obj,headers);
        if(lps.data.success){
             SetSuccessMsg(lps.data.success);
        }
        UIaddLandingPages(lps.data.lp_public,lps.data.lp_private);

        // Set Landing Pages => Public and Private 
   
    UIisLoadedLandingPages();
    }catch(err){
         let errors = err.response.data.errors;
            if(errors){
                SetErrorsMsg(errors);
            }
    UIisLoadedLandingPages();
    }
};



const DbLanding = (props) =>{
    useEffect(()=>{
        if(!props.ui.lps_loaded){
            GetLandingPages(
                props.UIaddLandingPages,
                props.SetErrorsMsg,
                props.SetSuccessMsg,
                props.UIisLoadedLandingPages               
            );
        }
    // eslint-disable-next-line
    },[props.ui.lps_loaded]);

    let lp_public_dictionary = {};
    const lp_public_from_server = props.ui.landingpages.lp_public;
    // Get Catergories
    lp_public_from_server.forEach((el)=>{
        lp_public_dictionary[el.category]=[];
    });
    // Assign Landing Pages to categories
    lp_public_from_server.forEach((el)=>{
        lp_public_dictionary[el.category].push(el);
    });
    
    let public_landing_pages = Object.entries(lp_public_dictionary).map((el)=>{
        return <Fragment key={uuidv4()}>
            <h2>{el[0]}</h2>
            <div className='row'>
                {el[1].map((el2)=>{
                    return (
                    <div className='landingpages_holder' key={uuidv4()}>
                    <LandingPagePreview 
                    name={el2.name}
                    url={`/landingpage?lp=${el2._id}`} // View as Client
                    action={()=>{ // Go to Editor
                        window.open(`/editor/landingpage?lp=${el2._id}&u=0`,'_blank');
                    }}/>
                    </div>);
                })}
            </div>
        </Fragment>
    });
    
    let private_landing_pages =props.ui.landingpages.lp_private.map((el)=>{
        return (
       
        <LandingPagePreview 
        name={el.name}
        url={`/landingpage?lp=${el._id}`} // View as Client
        key={uuidv4()}
        action={()=>{ // Go to Editor
            window.open(`/editor/landingpage?lp=${el._id}&u=1`,'_blank');
        }}
        />
       );
    }

    );

    return(
        <div className='dbLanding_holder'>
            <SearchBarBasic label='Busca tu landing page favorito'/>
            <div className='display_landingpages'>
               {public_landing_pages}
                <h2>Tus Landing Pages Creados</h2>
                {
                    private_landing_pages.length > 0 &&
                <div className='landingpages_holder'>
                    {private_landing_pages}
                </div>
                }
                <br/>
                    <AddLandingPage/>
            </div>
        </div>
    );
}

const mapStateToProp = state =>({
    ui : state.uiGeneral
});

export default connect(mapStateToProp,{
    UIaddLandingPages,
    SetErrorsMsg,
    SetSuccessMsg,
    UIisLoadedLandingPages
})(DbLanding);