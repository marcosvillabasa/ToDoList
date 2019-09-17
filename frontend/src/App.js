import React from 'react';
import './App.css';

import MainComponent from './components/mainComponent'

import CreateTask from '../src/components/CreateTask';
import Navigation from '../src/components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {

render(){
  return (
    <React.Fragment>
      <Router>
        <Navigation/>
        <div className="container p-3">
          <Switch>
            <Route path='/' exact component={MainComponent} />
            <Route path='/createTask' exact component={CreateTask} />
          
          </Switch>
          

        </div>
       </Router>
    </React.Fragment>
    
  );
}
  
}

export default App;
