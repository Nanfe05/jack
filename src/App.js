import React from 'react';
// Router 
import {BrowserRouter,Switch,Route} from 'react-router-dom';
// Components
import Home from './components/macro/home';
import Dashboard from './components/macro/dashboard';
// Layout 
import Footer from './components/meso/layout/footer/';
// Styles
import './components/contents/_styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
