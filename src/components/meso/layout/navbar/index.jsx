import React from 'react';
// Redux 
import {connect} from 'react-redux';
import {switchHomeTab,switchLogin,switchSignup
} from '../../../../redux/actions/uiGeneral';
// React Router
//import {useHistory} from 'react-router-dom';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from '@material-ui/core/styles';

// Components - Micro
import Logo from '../../../micro/logo';
import ColorsButton from '../../../micro/buttons/colorsButton/';


// Modals
import Login from '../../../macro/login/';
import Signup from '../../../macro/signup/';

const titles = require('../../../contents/titles.json');


/*
NAVBAR OPTIONS 
- LOGGED
- NOT LOGGED
*/
    const NotLogged=({navTab,setNavTab,loginForm,signupForm})=>{
        const style = styles();

        return(
            <AppBar position='static' className={style.navbar}>
            <Logo/>
            <Tabs value={navTab} onChange={(event,newVal)=>setNavTab(newVal)}>
                <Tab 
                    label={titles.navBar.home} 
                    id={`${titles.navBar.home.replace(' ','').toLowerCase()}_${0}`}
                />
                <Tab disabled
                    label={titles.navBar.landingPages}
                    id={`${titles.navBar.landingPages.replace(' ','').toLowerCase()}_${1}`}
                />
                <Tab disabled
                    label={titles.navBar.emailMarketing}
                    id={`${titles.navBar.emailMarketing.replace(' ','').toLowerCase()}_${2}`}
                />
                <Tab disabled
                    label={titles.navBar.funnelChannel} 
                    id={`${titles.navBar.funnelChannel.replace(' ','').toLowerCase()}_${3}`}
                />
                <Tab disabled
                    label={titles.navBar.price}
                    id={`${titles.navBar.price.replace(' ','').toLowerCase()}_${4}`}
                />
                <Tab disabled
                    label={titles.navBar.learning}
                    id={`${titles.navBar.learning.replace(' ','').toLowerCase()}_${5}`}
                />
            </Tabs>
            <ColorsButton action={loginForm} label='Inicio' classes='blue'/>
            <ColorsButton action={signupForm} label='Registrate' classes='green'/>
        </AppBar>
        );
    }


const Logged = (props) =>{   

    return(
        <div className='dashboard_header'>
            <Logo classes='white' icon={'white'}/>
            <ColorsButton label='Hazte Premium' classes='green'/>
            <div className='user_logout'>
                <h2>{`Hola ${props.userName}!`}</h2>
                <ColorsButton label='Logout' classes='green' action={props.logOut}/>
            </div>
        </div>
    );
}


/*
Main Component
*/
const NavBar = (props) =>{

const {
    homeTab,
    signupForm,
    loginForm,
    user
    } = props.uiGeneral;
const {
    switchHomeTab,
    switchLogin,
    switchSignup
} = props;





return(
    <React.Fragment>
    <Login isOpen={loginForm} onClose={switchLogin}/>
    <Signup isOpen={signupForm} onClose={switchSignup}/>
    <div className='home_navbar'>
    {user.logged?
        <Logged userName={user.name} logOut={()=>{
            // Delete Token 
            localStorage.removeItem('x-jackMarketing-token');
            window.location.href='/';
        }}/>
        :
        <NotLogged navTab={homeTab} setNavTab={switchHomeTab} loginForm={switchLogin} signupForm={switchSignup}/>    
    }
    </div>
    </React.Fragment>
);
};

// Styles Edition

const styles = makeStyles(()=>({
    navbar:{
        flexDirection:'row'
    }
}));

const mapStateToProps = state => ({
    uiGeneral: state.uiGeneral
})

export default connect(mapStateToProps,{
    switchHomeTab,
    switchLogin,
    switchSignup,
})(NavBar);