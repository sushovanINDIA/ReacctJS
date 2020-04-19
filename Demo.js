import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//class component
/*class Demo extends Component{
   render(){
        return(
            <div className="body">
                <h1>Hello {this.props.name}</h1>
                <p>This is my first application</p>
            </div>
        );
    }
}*/

//functional component
const Demo = ({name}/*or props*/ ) => {
    return(
        <div className="body">
            <h1>Hello {name}{/*or props.name*/}</h1>
            <p>This is my first application</p>
        </div>
    )
}

export default Demo;