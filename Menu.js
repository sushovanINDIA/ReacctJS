import React from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';
import './Menu.css'
//import DeviceStatus from './DeviceStatus'
import 'font-awesome/css/font-awesome.min.css';

const Menu = (props) =>{

   const deviceStatusList = [
        {
            systemstatus:"active",
            divices:"500",
            active:467,
            hospital:"R.N.TAGORE"
        }
    ]

    return(
        /*<div className="font">
            <nav className="bt bb tc mw9 center mt4 bg-navy">
                <Link className="f6 f5-l link bg-animate yellow hover-bg-lightest-blue dib pa3 ph4-l" to="/">Avatar</Link>
                <Link className="f6 f5-l link bg-animate yellow hover-bg-light-green dib pa3 ph4-l" to="/Aboutus">About</Link>
                <Link className="f6 f5-l link bg-animate yellow hover-bg-light-blue dib pa3 ph4-l" to="/Demo">Demo</Link>
                <a class="f6 f5-l link bg-animate yellow hover-bg-light-pink dib pa3 ph4-l" href="/about">About</a>
                <a class="f6 f5-l link bg-animate yellow hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
            </nav>
    </div>*/
        <header>
            <div className="tc">
                <Link to="/" className="f6 f5-l link bg-animate yellow hover-bg-lightest-blue dib pa3 ph4-l"><i className="fa fa-fw fa-dashboard"></i> Dashboard | </Link> 
                <Link to="./Aboutus" className="f6 f5-l link bg-animate yellow hover-bg-light-green dib pa3 ph4-l"><i class="fa fa-fw fa-info-circle"></i>Aboutus |</Link> 
                <Link to="./Demo" className="f6 f5-l link bg-animate yellow hover-bg-light-blue dib pa3 ph4-l"><i class="fa fa-fw fa-envelope"></i>Demo |</Link> 
                <Link to="/Getdata" className="f6 f5-l link bg-animate yellow hover-bg-light-pink dib pa3 ph4-l"><i class="fas fa-fw fa-table"></i> Data |</Link>
                <Link to="/Charts" className="f6 f5-l link bg-animate yellow hover-bg-light-yellow dib pa3 ph4-l"><i className="fa fa-bar-chart"></i>Charts |</Link>
            </div>
        </header>
        
    

    );
}

export default Menu;
