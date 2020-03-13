import React, { Component } from 'react';
import Dropdown from './Dropdown';
import { MDBNavLink, MDBNavItem } from 'mdbreact';
import { Link } from 'react-router-dom'


class NavBarMenu extends Component {

    state = {
        menuChosen: "home"
    }


    render() {
        return (
            <div>
                <nav className= "navbar navbar-expand-lg shift">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item active mr-5" >
                                    <Link to='/'>
                                        <a className="nav-link nav-menu">Home
                              <span className="sr-only">(current)</span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/products'>
                                        <a className="nav-link mr-5 nav-menu">Products
                              <span className="sr-only">(current)</span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/about'>
                                        <a className="nav-link mr-5 nav-menu">About
                              <span className="sr-only">(current)</span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/contactus'>
                                        <a className="nav-link mr-5 nav-menu">Contact
                              <span className="sr-only">(current)</span>
                                        </a>
                                    </Link>
                                </li>

                            </ul>
                            <span className="navbar-text white-text">
                                {/* <button className="btn btn-primary" outline>register</button> */}
                                <button type="button" class="btn btn-outline-light">register</button>
                            </span>
                        </div>
                    </div>
                </nav>

                {/* <nav class="navbar navbar-expand-lg luar">
                <div className="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse container-menu" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active menu">
                            <MDBNavLink to='/' className="al">Home</MDBNavLink>
                        </li>
                        <li class="nav-item menu">
                            <MDBNavLink to='/products' className="al">Products</MDBNavLink>
                        </li>
                        <li class="nav-item menu">
                            <MDBNavLink to='/about' className="al">About</MDBNavLink>
                        </li>
                        <li class="nav-item menu">
                            <MDBNavLink to='/contactus' className="al">Contact</MDBNavLink>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <Dropdown />
                    </span>
                </div>
                </div>
            </nav> */}
            </div>
        )
    }
};


export default NavBarMenu;