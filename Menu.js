import React from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';

const Menu = () =>{
    return(
        <div className="font">
            <nav class="bt bb tc mw7 center mt4">
                <Link class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">Avatar</Link>
                <Link class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/Aboutus">About</Link>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Shop</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">About</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
            </nav>
        </div>
    );
}

export default Menu;