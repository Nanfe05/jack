import React, {Fragment} from 'react';
// Router 
import {Switch,Route,Link} from 'react-router-dom';
// Layout 
import DashboardHeader from '../../meso/layout/dbHeader/';
import DashboardNavBar from '../..//meso/layout/dbNavbar/';

const Dashboard = () =>{
    return(
        <Fragment>
            {/* <div>Nav</div>
            <ul>
                <Link to='/dashboard/'>
                    <li>Dashboard Home</li>
                </Link>
                <Link to='/dashboard/funnelchannel/'>
                    <li>Funnel Channel</li>
                </Link>
            </ul> */}
                <DashboardHeader/>
                <div className='dashboard_holder'>
                <DashboardNavBar/>
                <Switch>
                    <Route exact path={'/dashboard/funnelchannel/'}>
                        <p>Funnel Channel</p>
                    </Route>
                    <Route exact path={'/dashboard/'}>
                        <p>Dashboar Home</p>
                    </Route>
                </Switch>
                </div>
        </Fragment>
    );
}


export default Dashboard;