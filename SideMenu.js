import React, { Component } from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';
import './SideMenu.css';

class SideMenu extends Component{

    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("openbtn").style.display = "none";
      }
      
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("openbtn").style.display = "block";
      }


    render(){
        return(
            <div className="font tc">
                <div id="mySidebar" className="sidebar o-120 tl">
                    <Link to="#" className="closebtn" onClick={()=>this.closeNav()}>×</Link>
                    <Link to="/">Avatar</Link>
                    <Link to="./Aboutus">AboutUs</Link>
                    <Link to="#">Clients</Link>
                    <Link to="#">Contact</Link>
                </div>

                <div id="main">
                <button className="openbtn" id="openbtn" onClick={()=>this.openNav()}>☰</button>
                </div>
            </div>
        )
    }
}

export default SideMenu;