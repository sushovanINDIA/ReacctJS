import React, {Component} from 'react';
//import { waitForElementToBeRemoved } from '@testing-library/react';
import 'tachyons';
import {Link} from 'react-router-dom';


class Footer extends Component{

    render(){
        return(
            <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
                <small className="f6 db tc">© 2020 <b className="ttu">ABC-XYZ Inc</b>., All Rights Reserved</small>
                <div className="tc mt3">
                    <Link to="/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</Link>
                    <Link to="/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</Link>
                    <Link to="/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</Link>
                </div>
            </footer>
        )
    }

}

export default Footer;
