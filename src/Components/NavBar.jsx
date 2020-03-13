import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import gambar from '../img/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* <nav className="navbar justify-content-between">
                    <div className="container">
                        <div style={{ opacity: "0.9" }}>Your reliable UPS Supplier in Indonesia</div>
                    </div>
                     <form className="form-inline navbar-right">
                            <a className="navbar-brand"><FacebookIcon /></a>
                            <a className="navbar-brand"><TwitterIcon /></a>
                            <a className="navbar-brand"><InstagramIcon /></a>
                            <a className="navbar-brand"><YouTubeIcon /></a>
                        </form> 
                </nav> */}
            </div>
        );
    }
}

export default NavBar;