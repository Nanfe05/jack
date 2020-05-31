import React from 'react';

// Redux
import {connect} from 'react-redux';
// Router
import {useHistory} from 'react-router-dom';

const Logo = (props) =>{

    let history = useHistory();

    return(
        <div className={`logo ${props.classes && props.classes}`} onClick={()=>{
            if(props.logged){
                history.push('/dashboard');
            }else{
                history.push('/');
            }
        }}>
            <h1>JACK</h1>
            <img src={`/assets/icons/${props.classes && props.classes === 'white' ? 'Jack_White.svg':'Jack_Green.svg'}`} alt={`jack-logo`}/>
        </div>
    );
}

const mapStateToProps = state =>({
    logged: state.uiGeneral.user.logged
});

export default connect(mapStateToProps)(Logo);