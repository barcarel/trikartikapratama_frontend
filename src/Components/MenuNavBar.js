import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn
} from "mdbreact";
import { logout } from '../redux/action'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class MenuNavBar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onBtnLogOut = () => {
        this.props.logout()
    }

    render() {
        return (
            // <BrowserRouter>
            <MDBNavbar className="navbar-menu" expand="md">
                <div className="container">
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/">
                                    <span className="nav-menu p-3">Home</span>
                                </MDBNavLink>
                            </MDBNavItem>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <MDBNavItem>
                                <MDBNavLink to="/products">
                                    <span className="nav-menu p-3">Products</span>
                                </MDBNavLink>
                            </MDBNavItem>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <MDBNavItem>
                                <MDBNavLink to="/about">
                                    <span className="nav-menu p-3">About</span>
                                </MDBNavLink>
                            </MDBNavItem>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <MDBNavItem>
                                <MDBNavLink to="/contactus">
                                    <span className="nav-menu p-3">Contact</span>
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBDropdown>
                                    {this.props.role == 'user' && this.props.username
                                        ?
                                        <div>
                                            {/* <MDBNavItem>
                                                <ShoppingCartIcon style={{ marginRight: '2vh', marginTop: '0.7vh' }} />
                                            </MDBNavItem> */}
                                            <MDBDropdownToggle nav caret>
                                                <div className="d-none d-md-inline" style={{ color: '#fff' }}>
                                                    {this.props.username}
                                                    &nbsp;
                                                    <AccountCircleIcon />
                                                </div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right className="dropdown-default">
                                                <MDBDropdownItem header>Profile</MDBDropdownItem>
                                                <Link to='/userprofile'>
                                                    <MDBDropdownItem>View profile</MDBDropdownItem>
                                                </Link>
                                                <MDBDropdownItem>Edit profile</MDBDropdownItem>
                                                <MDBDropdownItem divider />
                                                <MDBDropdownItem header>Account</MDBDropdownItem>
                                                <MDBDropdownItem >Change password</MDBDropdownItem>
                                                <MDBDropdownItem divider />
                                                <MDBDropdownItem onClick={this.onBtnLogOut}>log out</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </div>
                                        :
                                        this.props.role == 'admin'
                                            ?
                                            <div></div>
                                            :
                                            < div >
                                                <Link to='/register'>
                                                    <MDBBtn className="user-register-btn" color="white">register</MDBBtn>
                                                </Link>
                                                <Link to='/userlogin'>
                                                    <MDBBtn color="indigo darken-4">login</MDBBtn>
                                                </Link>
                                            </div>
                                    }


                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </div>
            </MDBNavbar >
            // </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps, { logout })(MenuNavBar);