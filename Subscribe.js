import React, { Component } from 'react';
import 'tachyons';
//import {Link} from 'react-router-dom';
import './Subscribe.css'


class Subscribe extends Component{
    

    /*openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }*/

    render(){
        return(
            <div>
               <body className="font">
               <h1 className="tc">Hello Subscribe</h1>
                {/*<div id="mySidebar" className="sidebar o-90">
                    <Link to="#" className="closebtn" onClick={()=>this.closeNav()}>×</Link>
                    <Link to="/">Avatar</Link>
                    <Link to="./Aboutus">AboutUs</Link>
                    <Link to="#">Clients</Link>
                    <Link to="#">Contact</Link>
                </div>

                <div id="main">
                <button className="openbtn" onClick={()=>this.openNav()}>☰</button>  
                <h2>Collapsed Sidebar</h2>
                <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
        </div>*/}
               </body>
            </div>
        )
    }
    
}

export default Subscribe;