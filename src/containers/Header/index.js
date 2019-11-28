import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/logo2.jpg';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Link to="/" replace id="logoWrapper">
                    <img src={logo2} alt="Logo" id="logo" />
                </Link>
            </div>
        )
    }
}

export default Header;