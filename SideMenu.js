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
                <div id="mySidebar" className="sidebar tl">
                    <Link to="#" className="closebtn" onClick={()=>this.closeNav()}>×</Link>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="/">DashBoard</Link>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="./Aboutus">AboutUs</Link>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="./Demo">Demo</Link>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="./Charts">Charts</Link>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="./GetData">Data</Link>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="/Subscribe">Subscribe</Link>
                </div>

                <div id="main">
                <button className="openbtn" id="openbtn" onClick={()=>this.openNav()}>&#9776;</button>
                </div>
            </div>
        )
    }
}

export default SideMenu;
