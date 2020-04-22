import React, {Component} from 'react';
import './Avatar.css'
import 'tachyons'
import AvatarList from './AvatarList';
//import Menu from './Menu';
//import Aboutus from './Aboutus';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Chart from './Charts';
import Googlecharts from './Googlecharts';

//import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class Avatar extends Component{

    constructor(){
        super();
        this.state={
           name:"Welcome to Avatar World",
           posts:[]
        }
    }
 
    changeState(){
        this.setState({
            name:"Welcome to Our Website"
        })
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts: response.data});
        })
        .catch(error =>{
            console.log(error);
        })
    }



    render(){
        const {posts} = this.state;

       /* const deviceStatusList = [
            {
                systemstatus:"active",
                divices:"500",
                active:467,
                hospital:"R.N.TAGORE"
            }
        ]
        const AvatarDataList =[
            {
                id: "M 2200",
                name: "Hardy",
                age: 109,
                spo2:"93%",
                bpm: 110,
                temp: "109 F",
                work:"Developer",
                address:"kolkata"
            },
            {
                id: "M 2201",
                name: "Vinod",
                age: 55,
                spo2:"80%",
                bpm: 98,
                temp: "119 F",
                work:"Teacher",
                address:"kolkata"
            },
            
            {
                id: "M 2222",
                name: "Kamlesh",
                age: 78,
                spo2:"87%",
                bpm: 107,
                temp: "101 F",
                work:"Cook",
                address:"nyc"
            },
            {   
                id: "M 2290",
                name:"Kanishk",
                age: 27,
                spo2:"92%",
                bpm: 120,
                temp: "130 F",
                work:"Student",
                address:"kolkata"
            },
            {   
                id: "M 2290",
                name:"Kanishk",
                age: 27,
                spo2:"92%",
                bpm: 120,
                temp: "130 F",
                work:"Student",
                address:"kolkata"
            },
            {   
                id: "M 2290",
                name:"Kanishk",
                age: 27,
                spo2:"92%",
                bpm: 120,
                temp: "130 F",
                work:"Student",
                address:"kolkata"
            }
            
        ]*/
    
    
        /*/const avatararray = AvatarDataList.map((avatarcard,i) =>{
            return <AvatarList key={i} age={AvatarDataList[i].age} id={AvatarDataList[i].id} name={AvatarDataList[i].name} spo2={AvatarDataList[i].spo2} bpm={AvatarDataList[i].bpm} temp={AvatarDataList[i].temp} work={AvatarDataList[i].work} address={AvatarDataList[i].address}/>
        })*/
        const dataArray = posts.map((datacard, i) =>{
            return <AvatarList key={i} userId={posts[i].userId} id={posts[i].id}/>
        })
        /*const devicedataarray= deviceStatusList.map((datacard,j)=>{
            return <AvatarList key={j} hospital={deviceStatusList[j].hospital}/>
        })*/
        return(
            <body className="body">
                <div className="font tc bg-dark-navy">

                    <h1 className="tc">Patient Dashboard</h1>
                        <div className="bg-white tc">
                            <Googlecharts />
                        </div>
                        {/*{avatararray}*/}
                        {dataArray}
                        <br></br>
                    <Link className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mw5" to="/Subscribe">Subscribe</Link>
                </div>
            </body>
            
            
        )
    }
    
}

export default Avatar;
