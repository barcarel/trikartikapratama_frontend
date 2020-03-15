import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import SideNavigation from '../Components/SideNavigation'
import Swal from 'sweetalert2'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import {changePassword} from '../redux/action'

class UserAccount extends Component {

    state = {
        isChangePass: true
    }

    onPressChangePassword = () => {
        this.setState({ isChangePass: !this.state.isChangePass })
    }

    onBtnSave = () => {
        var oldpassword = this.oldPassword.value
        var newpassword = this.newPassword.value
        var confirmnewpassword = this.confirmNewPassword.value
        var id  = this.props.id

        console.log(id, oldpassword, newpassword, confirmnewpassword)

        if(oldpassword && newpassword && confirmnewpassword){
            if(newpassword != confirmnewpassword){
                Swal.fire({
                    icon: 'warning',
                    text: 'invalid confirm password'
                })
            }
            this.props.changePassword(id, oldpassword, newpassword, confirmnewpassword)
        } else {
            Swal.fire({
                icon: 'error',
                text: 'please input all fields'
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                        <div className="text-center" style={{ fontSize: '20px'}}>Account setting</div>
                        <div className="mt-5">
                            <MDBContainer>
                                {/* <MDBInput label="Old Username" inputRef={(username) => this.username = username} />
                                <MDBInput label="Last Name" inputRef={(lastName) => this.lastName = lastName} />
                                <MDBInput label="Company" inputRef={(company) => this.company = company} />
                            <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>save</MDBBtn> */}
                                <small className="text-muted mb-5">Account information</small>
                                <div className="row pt-3 mt-3">
                                    <div className="col-auto text-muted">
                                        Username
                                    </div>
                                    <div className="col-8" style={{ textAlign: 'left' }}>
                                        {this.props.username}
                                    </div>
                                </div>
                                <div className="row pt-3 mt-3">
                                    <div className="col-auto d-inline" onClick={this.onPressChangePassword}>
                                        <a href="#" style={{ textDecoration: 'underline' }}>Change password</a>
                                    </div>
                                </div>
                                {this.state.isChangePass
                                    ?
                                    <>
                                    </>
                                    :
                                    <div>
                                        <div className="row">
                                            <div className="col-auto text-muted">
                                                <MDBInput label="Old password" type="password" inputRef={(oldPassword) => this.oldPassword = oldPassword} />
                                                <MDBInput label="New password" type="password" inputRef={(newPassword) => this.newPassword = newPassword} />
                                                <MDBInput label="Confirm new password" type="password" inputRef={(confirmNewPassword) => this.confirmNewPassword = confirmNewPassword} />
                                                <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>save</MDBBtn>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {/* <div className="col-8" style={{ textAlign: 'left' }}>
                                        {this.props.username}
                                    </div> */}
                            </MDBContainer>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps, {changePassword})(UserAccount);