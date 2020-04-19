import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Menu from './Menu';
import Aboutus from './Aboutus';
import Avatar from './Avatar';
import Subscribe from './Subscribe';
import SideMenu from './SideMenu';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (


    <div className="font">
      <BrowserRouter>
          <Menu/>   
          <SideMenu/>          
          <Switch>
                  <Route path="/" exact component={Avatar}/>
                  <Route path="/Aboutus" component={Aboutus}/>
                  <Route path="/Subscribe" component={Subscribe}/>
                  <Route path="/SideMenu" component={SideMenu}/>
          </Switch>
                
      </BrowserRouter>
    </div>
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */
  );
}

export default App;
