import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
