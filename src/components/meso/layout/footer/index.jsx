import React,{useEffect} from 'react';

// Redux
import {connect} from 'react-redux';


const Footer = (props) =>{
    useEffect(()=>{},[props.isLogged])

    return(
    <footer className={`footer ${props.isLogged?'blue':'white'}`}>
        © JACK 2020
    </footer>);
}

const mapStateToProps = state =>({
    isLogged : state.uiGeneral.user.logged
});


export default connect(mapStateToProps)(Footer);