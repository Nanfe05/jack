import React from 'react';
import {Redirect,Route} from 'react-router-dom';

// Redux
import {connect} from 'react-redux';

const PrivateRoute = ({component:Component,...rest})=>(
 <Route {...rest}
        render={(props)=>{
            if(rest.user && rest.user.logged){
                return <Component />;
            }else{
                return <Redirect to={{
                    pathname:'/'
                }}/>
            }
        }}
/>
);


const mapStateToProps = state =>({
    user: state.uiGeneral.user
});

export default connect(mapStateToProps,{})(PrivateRoute);