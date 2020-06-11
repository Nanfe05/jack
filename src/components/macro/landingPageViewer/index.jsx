import React,{useEffect,useState} from 'react';


// Material UI
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import {Text01,Box01,Media01,NewsLetterSubscribe} from './plainComponents';

import './index.css';

// Unique IDs
//import { v4 as uuidv4 } from 'uuid';
// API 
const axios = require('axios');

/*
Initial SetUp
** Ask server
** Set App
*/
const Init = async (id,setLoading,setContents,setSizes) =>{
    try{
        let result = await axios.get(`/jackmarketing/landingpage?id=${id}`);
        setContents(result.data.contents);
        setSizes(result.data.sizes);
        setLoading(false);

    }catch(err){
        //console.log(err);
        //window.location.replace('/');
    }
};

const SizeBreakPoint=(sizes,setBreakPoint)=>{
    let screenWidth = document.documentElement.clientWidth;
    let xs_mid_sm=((parseInt(sizes.xs.width)+parseInt(sizes.sm.width))/2);
    let sm_mid_md=((parseInt(sizes.sm.width)+parseInt(sizes.md.width))/2);
    let md_mid_lg=((parseInt(sizes.md.width)+parseInt(sizes.lg.width))/2);
    let lg_mid_xl=((parseInt(sizes.lg.width)+parseInt(sizes.xl.width))/2);

    if(screenWidth <= xs_mid_sm ){
        setBreakPoint('xs');
    }else if(screenWidth > xs_mid_sm && screenWidth <= sm_mid_md){
        setBreakPoint('sm');
    }else if(screenWidth > sm_mid_md && screenWidth <= md_mid_lg){
        setBreakPoint('md');
    }else if(screenWidth > md_mid_lg && screenWidth <= lg_mid_xl){
        setBreakPoint('lg');
    }else{
        setBreakPoint('xl');
    }
};

const LandingPageViewer = (props) =>{

    // State of View Page
    const [loading,setLoading]=useState(true);
    const [contents,setContents]=useState([]);
    const [sizes,setSizes] = useState({});
    const [breakPoint,setBreakPoint] = useState('md');
    const [clientW,setClientW] =useState(document.documentElement.clientWidth);

    let params = new URLSearchParams(window.location.search);
    // Setting Contents
    useEffect(()=>{
        if(loading){
            Init(params.get('lp'),setLoading,setContents,setSizes);
        }
    // eslint-disable-next-line
    },[loading]);
    // Setting Break Points and Event Listeners
    useEffect(()=>{
        if(Object.keys(sizes).length > 0){
            SizeBreakPoint(sizes,setBreakPoint);
            // SET EVENT LISTENER
            window.addEventListener('resize',()=>{
                SizeBreakPoint(sizes,setBreakPoint);
                setClientW(document.documentElement.clientWidth);
            });
        }    
    // eslint-disable-next-line
    },[sizes]);

  
    // if Loading 
    if(loading){
        return(
            <Backdrop open={loading} style={{zIndex:'2000'}}>
                <CircularProgress style={{color:'white'}}/>
            </Backdrop>
        );
    }

    // Create Contents Object
    const elements = contents.length > 0 && contents.map((el,i)=>{
        if(el.component === 'NewsLetterSubscribe'){
            let id = el.id;
                return <NewsLetterSubscribe 
                                            key={id} id={id} contents={el.template.content}
                                            layout={el.template.layout} breakpoint={breakPoint}
                />;
        }
        if(el.component === 'Text01'){
            let id = el.id;
            return <Text01 
                            key={id} id={id} contents={el.template.content}
                            layout={el.template.layout} breakpoint={breakPoint}
                />;
        }
        if(el.component === 'Box01'){
            let id = el.id;
            return <Box01 
                            key={id} id={id} contents={el.template.content}
                            layout={el.template.layout} breakpoint={breakPoint}
                />;
        }
        if(el.component === 'Media01'){
            let id = el.id;
            return <Media01 
                            key={id} id={id} contents={el.template.content}
                            layout={el.template.layout} breakpoint={breakPoint}
                />;
        }
        return <span ></span>;
    });


    return(<div 
    className='preview_container'
    style={{
        height:sizes[breakPoint].height,
        width:clientW,
    }}>
        {elements}
    </div>);
};

export default LandingPageViewer;