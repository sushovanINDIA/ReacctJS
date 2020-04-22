import React from 'react';
import 'tachyons'; 
import './Avatar.css';

const AvatarList = (props) =>{
    return(
        
            <div className="avatarstyle ma4 bg-navy dib pa4 tl grow o-60">
            {/*<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>*/}
            {/*<h3>name:{props.name}}</h3>
            <h3>{props.work}</h3>
            <h3>{props.address}</h3>*/}
            {/*<h2 className="white">{props.name}</h2>
            <h3 className="gold">{props.id}{'   '}{props.age}</h3>

            <h5>----------------------------</h5>
            <h3 className="lightest-green">Spo2    {props.spo2}</h3>
            <h3 className="gold">bpm               {props.bpm}</h3>
            <h3 className="gold">temparature       {props.temp}</h3>*/}
            <h3 className="white"><i className="fa fa-user-circle"></i> {props.id}</h3>
            <h3 className="gold">{props.userId}</h3>
            <hr></hr>
            <h3 className="lightest-green"><i className="fa fa-heart"></i></h3>
            <h3 className="gold"><i className="fa fa-heartbeat"></i></h3>
            <h3 className="red"><i className="fa fa-thermometer"></i></h3>
        </div>
        
             
    )
}

export default AvatarList;
