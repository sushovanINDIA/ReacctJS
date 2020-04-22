import React, { Component } from 'react';
import 'tachyons';
//import {Link} from 'react-router-dom';
import './Subscribe.css'
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Subscribe extends Component{
    
    constructor(props){
        super(props);
        this.state={
            userId:'',
            title:'',
            body:''
            
        }
        this.inputRefs = React.createRef()
    }

    changeHandler = e =>{
        this.setState({[e.target.name] : e.target.value });
    }

    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })

    }

    componentDidMount(){
        this.inputRefs.current.focus();
    }
    /*openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }*/

    render(){
        const {userId, title, body} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler} className="tc">
                    <div className="container tc">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <div className="tc">
                        
                        <input type="text" className="o-60" name="userId" placeholder="UserId..." ref={this.inputRefs} value={userId} onChange= {this.changeHandler}/>
                        </div>
                        
                        <div className="tc">
                        
                        <input type="text" className="o-60" name="title" placeholder="Title..." value={title} onChange={this.changeHandler}/>
                        </div>
                        
                        <div>
                        
                        <input type="text" className="o-60" name="body" placeholder="Body..." value={body} onChange={this.changeHandler}/>
                        </div>
                        
                        <hr />
                        <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                        <button type="submit" class="registerbtn">Register</button>
                    </div>
                    </form>
                
            </div>

            
                
                /*<form onSubmit={this.submitHandler} className="tc">
                    <div>
                        <input type="text" name="userId" ref={this.inputRefs} value={userId} onChange= {this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
        </form>*/
            /*<div>
               <body className="font tc">
               <h1 className="tc">Hello Subscribe</h1>
               <Loader
         type="Bars"
         color="#003153"
         height={100}
         width={100}
         //timeout={3000} //3 secs
 
        />
                <div id="mySidebar" className="sidebar o-90">
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
        </div>*
        </body>
                
            </div>*/
            
        )
    }
    
}

export default Subscribe;
