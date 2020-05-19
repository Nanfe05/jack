import React from 'react';
// Redux 
import {connect} from 'react-redux';
// Additional Libraries
import SwipeableViews from 'react-swipeable-views';
// Contents
import HpHome from '../../meso/homePages/home/';
import HpFunnelChannel from '../../meso/homePages/funnelChannel';
import HpLandingPages from '../../meso/homePages/landingPages';
import HpLearning from '../../meso/homePages/learning';
import HpPrice from '../../meso/homePages/price';
import HpEmailMarketing from '../../meso/homePages/emailMarketing';


const titles = require('../../contents/titles.json');

const Home = (props) =>{

    const {homeTabSelected} = props;

    return(<div className='swipeable_holder'>
        <SwipeableViews index={homeTabSelected}>
            <div 
                role='tabpanel'
                hidden={homeTabSelected !== 0}
                id={`${titles.navBar.home.replace(' ','').toLowerCase()}_${0}`}
                value={homeTabSelected}
            >
                <HpHome/>
            </div>
            <div 
                role='tabpanel'
                hidden={homeTabSelected !== 1}
                id={`${titles.navBar.landingPages.replace(' ','').toLowerCase()}_${1}`}
                value={homeTabSelected}
            >
                <HpLandingPages/>
            </div>
            <div 
                role='tabpanel'
                hidden={homeTabSelected !== 2}
                id={`${titles.navBar.emailMarketing.replace(' ','').toLowerCase()}_${2}`}
                value={homeTabSelected}
            >
                <HpEmailMarketing/>
            </div>
            <div 
                role='tabpanel'
                hidden={homeTabSelected !== 3}
                id={`${titles.navBar.funnelChannel.replace(' ','').toLowerCase()}_${3}`}
                value={homeTabSelected}
            >
                <HpFunnelChannel/>
            </div>
            <div 
                role='tabpanel'
                hidden={homeTabSelected !== 4}
                id={`${titles.navBar.price.replace(' ','').toLowerCase()}_${4}`}
                value={homeTabSelected}
            >
                <HpPrice/>
            </div>
            <div 
                role='tabpanel'
                hidden={homeTabSelected !== 5}
                id={`${titles.navBar.learning.replace(' ','').toLowerCase()}_${5}`}
                value={homeTabSelected}
            >
                <HpLearning/>
            </div>
        </SwipeableViews>
        </div>);
}


const mapStateToProps = state => ({
    homeTabSelected: state.uiGeneral.homeTab
});

export default connect(mapStateToProps)(Home);