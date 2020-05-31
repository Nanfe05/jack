import React from 'react';
import {Redirect,Route} from 'react-router-dom';

// Redux
import {connect} from 'react-redux';

const PublicRoute = ({component:Component,...rest})=>(
 <Route {...rest}
        render={(props)=>{
            if(rest.user && rest.user.logged){
                return <Redirect to={{
                    pathname:'/dashboard'
                }}/>
            }else{
                return <Component />;
            }
        }}
/>
);


const mapStateToProps = state =>({
    user: state.uiGeneral.user
});

export default connect(mapStateToProps,{})(PublicRoute);