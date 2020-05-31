import React from 'react';
// Redux 
import {Provider} from 'react-redux';
import store from './redux/store';
// Router 
import {BrowserRouter,Switch,Route} from 'react-router-dom';
// Private Routes - Middleware
import PrivateRoute from './components/shared/privateRoute/';
import PublicRoute from './components/shared/publicRoute/';
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
          <Loading/>
          <Notifications/>
          <NavBar/>
          <Switch>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Route path='/editor/landingpage'>
              <EditorLandingPage/>
            </Route>
            {/* <PrivateRoute path='/editor/landingpage' component={EditorLandingPage}/> */}
            <PublicRoute path='/' component={Home}/>
            {/* <Route path='/'>
              <Home/>
            </Route> */}
          </Switch>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
