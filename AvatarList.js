import React from 'react';
import 'tachyons'

const AvatarList = (props) =>{
    return(
        <div className="avatarstyle ma4 bg-light-purple dib pa4 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
            <h3>{props.name}</h3>
            <h3>{props.work}</h3>
            <h3>{props.address}</h3>
        </div>    
    )
}

export default AvatarList;