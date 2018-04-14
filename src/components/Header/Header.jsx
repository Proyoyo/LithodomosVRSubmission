// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/lithodomos_logo.svg';

const Header = () => (
    <div className="App-header">
        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
    </div>
);

export default Header;
