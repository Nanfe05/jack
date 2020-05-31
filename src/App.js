import React from 'react';
// Redux 
import {Provider} from 'react-redux';
import store from './redux/store';
// Router 
import {BrowserRouter,Switch} from 'react-router-dom';
// Private Routes - Middleware
import PrivateRoute from './components/shared/privateRoute/';
import PublicRoute from './components/shared/publicRoute/';
import Validate from './components/shared/validation/';
// Components
import Home from './components/macro/home';
import Dashboard from './components/macro/dashboard';
import EditorLandingPage from './components/macro/editor/landingPage/';
// Layout 
import Footer from './components/meso/layout/footer/';
import NavBar from './components/meso/layout/navbar/';
import Loading from './components/meso/layout/Loading/';
import Notifications from './components/meso/layout/Notifications/';
// Styles
import './components/contents/_styles.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Notifications/>
          <Loading/>
          <Validate>
            <NavBar/>
            <Switch>
              <PrivateRoute path='/dashboard' component={Dashboard}/>
              <PrivateRoute path='/editor/landingpage' component={EditorLandingPage}/> 
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
