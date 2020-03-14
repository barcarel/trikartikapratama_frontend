import React, { Component } from 'react';
// import profile from "../image/ilustration/profile.png";
import emoji from '../img/404notfound/emoji.png'
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="sidebar-fixed position-absolute">
                <div className="logo-wrapper">
                    <img alt="MDB React Logo" className="img-fluid" width="100px" src={emoji} />
                </div>
                <MDBListGroup className="list-group-flush">
                    <NavLink to="/userprofile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3" />
                            Profile
                    </MDBListGroupItem>
                    </NavLink>
                    {this.props.role === "admin"
                        ?
                        <>
                            <NavLink to="/ProductPage" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="table" className="mr-3" />
                                    Product
                            </MDBListGroupItem>
                            </NavLink>
                            <NavLink to="/OrderProgressPage" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="truck" className="mr-3" />
                                    Order Progress
                            </MDBListGroupItem>
                            </NavLink>
                            <NavLink to="/ResultPage" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="chart-pie" className="mr-3" />
                                    Market Result
                                </MDBListGroupItem>
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/useraccount" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="shopping-cart" className="mr-3" />
                                    Account
                                </MDBListGroupItem>
                            </NavLink>
                            <NavLink to="/OrderProgressPage" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="truck" className="mr-3" />
                                    Tracking Order
                                </MDBListGroupItem>
                            </NavLink>
                            <NavLink to="/HistoryPage" activeClassName="activeClass">
                                <MDBListGroupItem>
                                    <MDBIcon icon="history" className="mr-3" />
                                    History
                                </MDBListGroupItem>
                            </NavLink>
                        </>
                    }
                    {/* <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3" />
                        Maps
                    </MDBListGroupItem>
                </NavLink> */}
                    {/* <NavLink exact={true} to="/ResultPage" activeClassName="activeClass"> */}
                    {/* <NavLink to="/404" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="exclamation" className="mr-3" />
                            404
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
