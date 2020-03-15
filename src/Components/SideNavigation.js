import React, { Component } from 'react';
// import profile from "../image/ilustration/profile.png";
import emoji from '../img/404notfound/emoji.png'
import profileicon from '../img/websiteimg/profileicon.png'
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="sidebar-fixed position-absolute">
                <div className="logo-wrapper">
                    <img alt="MDB React Logo" className="img-fluid" width="100px" src={profileicon} />
                </div>
                <MDBListGroup className="list-group-flush">
                    <NavLink to="/userprofile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="ml-2 mr-3" />
                            Profile
                    </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/useraccount" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="shopping-cart" className="mr-3" />
                                    Account
                                </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/usertransaction" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="truck" className="mr-3" />
                                    Transaction
                                </MDBListGroupItem>
                    </NavLink>
                    {/* <NavLink to="/HistoryPage" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="history" className="mr-3" />
                                    History
                                </MDBListGroupItem>
                    </NavLink> */}
                </MDBListGroup>
            </div>
        );
    }
}

const makeStatetoProps = (state) => {
    return {
        role: state.user.role
    }
}

export default connect(makeStatetoProps)(SideNavigation);
