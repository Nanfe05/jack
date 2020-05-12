import React, {useState} from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from '@material-ui/core/styles';
// Additional Libraries
import SwipeableViews from 'react-swipeable-views';
// Contents
import HpHome from '../../homePages/home';
import HpFunnelChannel from '../../homePages/funnelChannel';
import HpLandingPages from '../../homePages/landingPages';
import HpLearning from '../../homePages/learning';
import HpPrice from '../../homePages/price';
import HpEmailMarketing from '../../homePages/emailMarketing';

const titles = require('../../../contents/titles.json');

const NavBar = () =>{
const style = styles();

const [navTab, setNavTab] = useState(0);

return(
    <div >
        <AppBar position='static' className={style.navbar}>
            <h1>Jack</h1>
            <Tabs value={navTab} onChange={(event,newVal)=>setNavTab(newVal)}>
                <Tab 
                    label={titles.navBar.home} 
                    id={`${titles.navBar.home.replace(' ','').toLowerCase()}_${0}`}
                />
                <Tab 
                    label={titles.navBar.landingPages}
                    id={`${titles.navBar.landingPages.replace(' ','').toLowerCase()}_${1}`}
                />
                <Tab 
                    label={titles.navBar.emailMarketing}
                    id={`${titles.navBar.emailMarketing.replace(' ','').toLowerCase()}_${2}`}
                />
                <Tab 
                    label={titles.navBar.funnelChannel} 
                    id={`${titles.navBar.funnelChannel.replace(' ','').toLowerCase()}_${3}`}
                />
                <Tab 
                    label={titles.navBar.price}
                    id={`${titles.navBar.price.replace(' ','').toLowerCase()}_${4}`}
                />
                <Tab 
                    label={titles.navBar.learning}
                    id={`${titles.navBar.learning.replace(' ','').toLowerCase()}_${5}`}
                />
            </Tabs>
            <h2>Registro</h2>
            <h2>Inicio</h2>
        </AppBar>
        <SwipeableViews index={navTab}>
            <div 
                role='tabpanel'
                hidden={navTab !== 0}
                id={`${titles.navBar.home.replace(' ','').toLowerCase()}_${0}`}
                value={navTab}
            >
                <HpHome/>
            </div>
            <div 
                role='tabpanel'
                hidden={navTab !== 1}
                id={`${titles.navBar.landingPages.replace(' ','').toLowerCase()}_${1}`}
                value={navTab}
            >
                <HpLandingPages/>
            </div>
            <div 
                role='tabpanel'
                hidden={navTab !== 2}
                id={`${titles.navBar.emailMarketing.replace(' ','').toLowerCase()}_${2}`}
                value={navTab}
            >
                <HpEmailMarketing/>
            </div>
            <div 
                role='tabpanel'
                hidden={navTab !== 3}
                id={`${titles.navBar.funnelChannel.replace(' ','').toLowerCase()}_${3}`}
                value={navTab}
            >
                <HpFunnelChannel/>
            </div>
            <div 
                role='tabpanel'
                hidden={navTab !== 4}
                id={`${titles.navBar.price.replace(' ','').toLowerCase()}_${4}`}
                value={navTab}
            >
                <HpPrice/>
            </div>
            <div 
                role='tabpanel'
                hidden={navTab !== 5}
                id={`${titles.navBar.learning.replace(' ','').toLowerCase()}_${5}`}
                value={navTab}
            >
                <HpLearning/>
            </div>
        </SwipeableViews>
    </div>
);
};

// Styles Edition

const styles = makeStyles(()=>({
    navbar:{
        flexDirection:'row'
    }
}));



export default NavBar;