import React,{Component} from 'react';
import axios from 'axios';
//import BootstrapTable from 'reactjs-bootstrap-table';
//import Table from 'react-bootstrap/Table'
import './Getdata.css';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import Footer from './Footer';
import 'tachyons';

import Loader from 'react-loader-spinner'


class Getdata extends Component{

    constructor(props){
        super(props);

        this.state={
            posts: [],
            loading: true
        }
    }
   // D:\myreactapps\reactyoutube\src\spinner.gif
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts: response.data});
            this.setState({loading: false});
            //this.setState({loading: true});
            
        })
        .catch(error =>{
            console.log(error);
        })
    }


    render(){
       // const {posts} = this.state;
       //const { this.state.posts, loading } = this.state;
       let posts;
       if(this.state.loading){
           posts = <div className="tc">
                {/*<img src={ loading } />*/}
                <Loader
         type="Puff"
         color="gold"
         height={70}
         width={70}
         className="loader tc pt3"
         //timeout={3000} //3 secs
 
      />
               </div>
       }
       else{
           posts = <div><table>
           <thead>
               <tr>
                   <th>DeviceId</th>
                   <th>Title</th>
                   <th>Body</th>
               </tr>
           </thead>
           
           <tbody>
               {this.state.posts.map(
                   data=><tr key={data.id}>
                           <td>{data.id}</td>
                           <td>{data.title}</td>
                           <td>{data.body}</td>
                   </tr>
               )}
           </tbody>
           
       </table>
       </div>
       
       }
        return(
            <div className="bg-white">
                {posts}
            </div>
            
        )
    }
}

export default Getdata;
