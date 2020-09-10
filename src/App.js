import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loginpage from './component/loginpage';
import Dashboard from './component/dashboard';

function App(){
  return(
    <Router>
      <Route path="/" exact component={Loginpage}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      </Router>
  )
}
export default App;