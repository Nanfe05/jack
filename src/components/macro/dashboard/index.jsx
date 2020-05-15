import React, {Fragment} from 'react';
// Router 
import {Switch,Route} from 'react-router-dom';
// Layout 
import DashboardHeader from '../../meso/layout/dbHeader/';
import DashboardNavBar from '../..//meso/layout/dbNavbar/';
// Components 
// Meso 
import DbHome from '../../meso/dashboardPages/dbHome/';
import DbLanding from '../../meso/dashboardPages/dbLanding/';

const Dashboard = () =>{
    return(
        <Fragment>
                <DashboardHeader/>
                <div className='dashboard_holder'>
                <DashboardNavBar/>
                <Switch>
                    <Route exact path={'/dashboard/landingpage/'}>
                        <DbLanding/>
                    </Route>
                    <Route exact path={'/dashboard/'}>
                        <DbHome/>
                    </Route>
                </Switch>
                </div>
        </Fragment>
    );
}


export default Dashboard;