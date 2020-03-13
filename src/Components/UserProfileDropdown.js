import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { connect } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import { logout } from '../redux/action'


class UserProfileDropdown extends Component {

    onPressLogOut = () => {
        this.props.logout()
    }

    render() {
        return (
            <MDBDropdown size="sm">
                <MDBDropdownToggle caret color="white">
                    {this.props.username}
                                    &nbsp;
                                    <AccountCircleIcon />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem onClick={this.onPressLogOut}>log out</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps, {logout})(UserProfileDropdown);