import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/action'
import { Link, Redirect } from 'react-router-dom'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import HomeIcon from '@material-ui/icons/Home';


class AdminNavbar extends Component {

    onBtnLogOut = () => {
        this.props.logout()
    }

    render() {
        return (
            <div>
                <nav className="navbar admin navbar-fixed-top">
                    <div className="ml-5">
                        Welcome, {this.props.username}
                    </div>
                    <div className="float-right mr-5">
                        <Link to='/admincontrolroom' className="mr-5">
                            <SupervisorAccountIcon />
                                &nbsp;
                                 Control Room
                                </Link>
                        <Link to='/' className="mr-5">
                            <HomeIcon /> visit website
                        </Link>
                        <Link to='/adminlogin'>
                            <a onClick={this.onBtnLogOut}>log out</a>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps, { logout })(AdminNavbar);