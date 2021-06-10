import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';



const App = () => {

  return (

      <Switch>
      <Route path='/trillo'>
          <LandingPage />
      </Route>
      <Route path='/'>
        <HomePage/>
      </Route>
      </Switch>
      

)
}

export default App;
