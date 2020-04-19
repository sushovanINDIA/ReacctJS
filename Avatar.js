import React, {Component} from 'react';
import './Avatar.css'
import 'tachyons'
import AvatarList from './AvatarList';
//import Menu from './Menu';
//import Aboutus from './Aboutus';
import {Link} from 'react-router-dom';

//import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class Avatar extends Component{

    constructor(){
        super();
        this.state={
            name:"Welcome to Avatar World"
        }
    }

    changeState(){
        this.setState({
            name:"Welcome to Our Website"
        })
    }

    render(){
        const AvatarDataList =[
            {
                name:"Donny",
                work:"Developer",
                address:"kolkata"
            },
            {
                name:"Poushali",
                work:"Teacher",
                address:"kolkata"
            },
            
            {
                name:"Sam",
                work:"Cook",
                address:"nyc"
            },
            {
                name:"Riju",
                work:"Student",
                address:"kolkata"
            }
            
        ]
    
    
        const avatararray = AvatarDataList.map((avatarcard,i) =>{
            return <AvatarList key={i} name={AvatarDataList[i].name} work={AvatarDataList[i].work} address={AvatarDataList[i].address}/>
        })
        return(
            <div className="font tc">

                <h1 className="tc">Welcome to Avatar World</h1>
                
                {avatararray}
                
                
                <br></br>            
                {/*<button onClick={() => this.changeState()} >Subscribe</button>*/}
                <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib purple" to="/Subscribe">Subscribe</Link>
            </div>
            
        )
    }
    
}

export default Avatar;