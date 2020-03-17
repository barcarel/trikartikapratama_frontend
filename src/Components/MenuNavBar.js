import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBNav, MDBRow, MDBInput, MDBLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader,
} from "mdbreact";
import { logout, getUserCart } from '../redux/action'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Collapse } from "@material-ui/core";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";
import { API_URL } from "../support/API_URL";



class MenuNavBar extends Component {
    state = {
        isOpen: false,
        spanCount: 0
    };

    componentDidUpdate() {
        if (this.props.id) {
            this.props.getUserCart(this.props.id)
            // console.log(this.cart.data)
        }
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onBtnLogOut = () => {
        this.props.logout()
    }

    mainDropdown = () => {
        return (
            <MDBDropdown>
                {this.props.role == 'user' && this.props.username
                    ?
                    <div>
                        <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline" style={{ color: '#fff' }}>
                                {this.props.username}
                                                    &nbsp;
                                                    <AccountCircleIcon />
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right className="dropdown-default">
                            <MDBDropdownItem>
                                <MDBNavLink to='/userprofile'>
                                    <SettingsIcon />
                                                    Settings
                                                </MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem onClick={this.onBtnLogOut}>
                                <ExitToAppIcon />
                                                    log out
                                                    </MDBDropdownItem>
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
        )
    }

    renderDataCart = () => {
        if (this.props.cart.data) {
            return this.props.cart.data.map((val, id) => {
                return (
                    <MDBDropdownItem disabled>
                        <div className="row" style={{ width: '50vh' }}>
                            <div className="col-4">
                                <img style={{ objectFit: 'cover' }} width="100%" height="100%" src={API_URL + val.imagepath} />
                            </div>
                            <div className="col-8 d-flex align-items-center flex-column bd-highlight mb-3">
                                <div class="p-2 bd-highlight">
                                    {val.name}
                                </div>
                                <div class="p-2 bd-highlight">
                                    {/* <MDBBtn size="sm" color="red darken-4">-</MDBBtn> */}
                                    <span className="ml-3 mr-3">
                                        {val.productqty}
                                    </span>
                                    {/* <MDBBtn size="sm" color="red darken-4">+</MDBBtn> */}
                                </div>
                            </div>
                        </div>
                        <MDBDropdownItem divider />
                    </MDBDropdownItem>
                )
            })
        }
    }

    cartDropdown = () => {
        return (
            <MDBDropdown>
                {this.props.role == 'user' && this.props.username
                    ?
                    <div>
                        <MDBDropdownToggle nav>
                            <div className="d-none d-md-inline" style={{ color: '#fff' }}>
                                <ShoppingCartIcon />
                                <MDBBadge color="primary"
                                    pill>{this.props.cart.data.length}</MDBBadge>
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right className="dropdown-default">
                            {/* <MDBDropdownItem>
                                <MDBListGroup style={{ width: "22rem" }}>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBDropdownItem> */}
                            {this.renderDataCart()}
                            <div className="text-center">
                                <Link to='/usercheckout'>
                                    <MDBBtn color="primary">check out</MDBBtn>
                                </Link>
                            </div>
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
        )
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
                            {
                                this.props.role == 'user'
                                    ?
                                    <div className=" mr-3">
                                        {this.cartDropdown()}
                                        {/* <ShoppingCartIcon /> */}
                                    </div>
                                    :
                                    <>
                                    </>
                            }
                            {this.mainDropdown()}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </div>
            </MDBNavbar >
            // </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ user, cart }) => {
    // console.log(cart)
    return {
        ...user,
        cart
    }
}

export default connect(mapStateToProps, { logout, getUserCart })(MenuNavBar);