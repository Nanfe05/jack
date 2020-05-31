import React from 'react';
import {Redirect,Route} from 'react-router-dom';

// Redux
import {connect} from 'react-redux';

const PrivateRoute = ({component:Component,...rest})=>(
    <Route {...rest}
    render={()=>{
        console.log(rest.loading);
            console.log(window.location.pathname);
            if(!rest.loading){
                if(rest.user && rest.user.logged){
                    return <Component />;
                }else{
                    return <Redirect to={{
                        pathname:'/'
                    }}/>
                }
            }
        
        }}
/>
);


const mapStateToProps = state =>({
    user: state.uiGeneral.user,
    loading: state.uiGeneral.isLoading
});

export default connect(mapStateToProps,{})(PrivateRoute);