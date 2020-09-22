import {Router} from '@reach/router';
import React from 'react';
import './App.css';
import Data from './Views/Data';
import Home from './Views/Home';


function App() {

  return (
    <div className="App">
      <Router>
        <Home default/>
        <Data path="/:id"/>
      </Router>
    </div>
  );
}

export default App;
