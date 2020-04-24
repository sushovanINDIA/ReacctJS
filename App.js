import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import Menu from './Menu';
import Aboutus from './Aboutus';
import Avatar from './Avatar';
import Subscribe from './Subscribe';
import SideMenu from './SideMenu';
import Getdata from './Getdata';
import Charts from './Charts';
//import Demo from './Demo';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
//for responsive layout
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

function App() {
  return (


    <div className="font">
      <Desktop>
      <BrowserRouter>
          <Menu/>   
                    
          <Switch>
                  <Route path="/" exact component={Avatar}/>
                  <Route path="/Aboutus" component={Aboutus}/>
                  <Route path="/Subscribe" component={Subscribe}/>
                  <Route path="/SideMenu" component={SideMenu}/>
                  <Route path="/Getdata" component={Getdata}/>
                  <Route path="/Charts" component={Charts}/>
                  {/*<Route path="/Demo" component={Demo} />*/}
          </Switch>
                
      </BrowserRouter>
      </Desktop>
      <Tablet>
      <BrowserRouter>
          <Menu/>   
         
          <Switch>
                  <Route path="/" exact component={Avatar}/>
                  <Route path="/Aboutus" component={Aboutus}/>
                  <Route path="/Subscribe" component={Subscribe}/>
                  <Route path="/SideMenu" component={SideMenu}/>
                  <Route path="/Getdata" component={Getdata}/>
                  <Route path="/Charts" component={Charts}/>
                  {/*<Route path="/Demo" component={Demo} />*/}
          </Switch>
                
      </BrowserRouter>
      </Tablet>
      <Mobile>
      <BrowserRouter>
          <Menu/>   
                    
          <Switch>
                  <Route path="/" exact component={Avatar}/>
                  <Route path="/Aboutus" component={Aboutus}/>
                  <Route path="/Subscribe" component={Subscribe}/>
                  <Route path="/SideMenu" component={SideMenu}/>
                  <Route path="/Getdata" component={Getdata}/>
                  <Route path="/Charts" component={Charts}/>
                  {/*<Route path="/Demo" component={Demo} />*/}
          </Switch>
                
      </BrowserRouter>
      </Mobile>
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
