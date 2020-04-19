import React from 'react';
import 'tachyons';
import './Aboutus.css';
//import 'react-bootstrap/Spinner';

const Aboutus = () =>{
    return(
        <div className="body">
            {/*<Spinner animation="grow" />*/}
            <h1 className="tc">AboutUs Page is Here</h1>
            <div className="pa4 tc">
                <img src={`https://unf.imgix.net/2018/08/Narayana-Murthy.png?auto=compress%2Cformat&fit=scale&h=654&ixlib=php-1.2.1&w=1024&wpsize=large`} className="br4 h5 w5 dib" alt="avatar"/>
            </div>
        </div>
    );
}

export default Aboutus;