import React from 'react';

// Material UI
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Redux
import {connect} from 'react-redux';

const Loading = ({isLoading}) =>{
    return(
        <div>
            <Backdrop open={isLoading} style={{zIndex:'2000'}}>
                <CircularProgress style={{color:'white'}}/>
            </Backdrop>
        </div>
    );
};

const mapStateToProps = state =>({
    isLoading: state.uiGeneral.isLoading
});

export default connect(mapStateToProps)(Loading);