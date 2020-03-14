import React, { Component } from 'react';
import { Row, Col, Button, Container, Dropdown } from 'reactstrap';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminNavbar from '../Components/AdminNavbar'

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.role == 'admin'
                    ?
                    <div>
                        {/* <Link to='/adminhomepage'> */}
                            {/* <SupervisorAccountIcon />
                                &nbsp;
                                 ADMIN */}
                            <AdminNavbar />
                        {/* </Link> */}
                    </div>
                    :
                    <div />
                }
                <nav className="navbar justify-content-between">
                    <div className="container">
                        <div style={{ opacity: "0.9" }}>Your reliable UPS Supplier in Indonesia</div>

                    </div>
                    {/* <form className="form-inline navbar-right">
                            <a className="navbar-brand"><FacebookIcon /></a>
                            <a className="navbar-brand"><TwitterIcon /></a>
                            <a className="navbar-brand"><InstagramIcon /></a>
                            <a className="navbar-brand"><YouTubeIcon /></a>
                        </form> */}
                </nav>
                <div className="container">
                    <div className="d-flex">
                        <div className="mr-auto p-2">
                            <img className="img-fluid" src={require('../img/logo/logo_tkp_final.png')} alt="header-logo" style={{ width: "60vh", maxWidth: "100%", height: "auto", paddingTop: "1%", paddingBottom: "1%" }} />
                        </div>
                        <div className="align-self-center d-none d-lg-block">
                            <div className="p-2 mr-4">
                                <CallTwoToneIcon style={{ fontSize: 40 }} className="menu-icon" />
                                &nbsp;
                        <span className="contact-info-detail">(021) 4522164</span>
                            </div>
                        </div>

                        <div className="align-self-center d-none d-lg-block">
                            <div className="p-2 ml-4">
                                <EmailTwoToneIcon style={{ fontSize: 40 }} className="menu-icon" />
                                &nbsp;
                        <span className="contact-info-detail">pt.trikartika@hotmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* <hr style={{ width: "1px", height: "50px", display: "inline-block", backgroundColor: "#D0D0D0" }}></hr> */}

                    {/* <div className="align-self-center">
                        <LocationOnTwoToneIcon style={{ fontSize: 40 }} className="menu-icon" />
                        &nbsp;
                        <span className="contact-info-detail">
                        ruko mediterania blok A-19 <br />jakarta , 14240
                        </span>
                    </div> */}
                </div>
            </div >
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps)(Header);