import React from 'react';
// Redux 
import {Provider} from 'react-redux';
import store from './redux/store';
// Router 
import {BrowserRouter,Switch, Route} from 'react-router-dom';
// Private Routes - Middleware
import PrivateRoute from './components/shared/privateRoute/';
import PublicRoute from './components/shared/publicRoute/';
import Validate from './components/shared/validation/';
// Components
import Home from './components/macro/home';
import Dashboard from './components/macro/dashboard';
import EditorLandingPage from './components/macro/editor/landingPage/';
import LandingPageViewer from './components/macro/landingPageViewer/';
// Layout 
import Footer from './components/meso/layout/footer/';
import NavBar from './components/meso/layout/navbar/';
import Loading from './components/meso/layout/Loading/';
import Notifications from './components/meso/layout/Notifications/';
// Styles
import './components/contents/_styles.scss';

function App() {

  let path = window.location.pathname;
  if(path === '/landingpage'){
    return (<div className='App'>
      <LandingPageViewer/>
    </div>)
  }

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Notifications/>
          <Loading/>
          <Validate>
            <NavBar/>
            <Switch>
              <PrivateRoute path='/dashboard/' component={Dashboard}/>
              <PrivateRoute path='/editor/landingpage/' component={EditorLandingPage}/> 
              <Route path='/landingpage/' component={LandingPageViewer}/>
              <PublicRoute path='/' component={Home}/>
            </Switch>
            <Footer/>
          </Validate>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
