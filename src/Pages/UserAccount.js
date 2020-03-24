import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import Swal from 'sweetalert2'
import { changePassword } from '../redux/action'
import SideNavigation from '../Components/SideNavigation'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

class UserAccount extends Component {

    state = {
        isChangePass: true,
        type: "password"
    }

    viewPassword = () => {
        if (this.state.type == 'password') {
            this.setState({ type: "text" })
        } else {
            this.setState({ type: "password" })
        }
    }

    onPressChangePassword = () => {
        this.setState({ isChangePass: !this.state.isChangePass })
    }

    onBtnCancel = () => {
        this.setState({ isChangePass: !this.state.isChangePass })
    }

    onBtnSave = () => {
        var oldpassword = this.oldPassword.value
        var newpassword = this.newPassword.value
        var confirmnewpassword = this.confirmNewPassword.value
        var id = this.props.id

        // console.log(id, oldpassword, newpassword, confirmnewpassword)

        if (oldpassword && newpassword && confirmnewpassword) {
            if (newpassword != confirmnewpassword) {
                Swal.fire({
                    icon: 'warning',
                    text: 'New password and confirm new password fields must be the same.'
                })
            } else {
                this.props.changePassword(id, oldpassword, newpassword, confirmnewpassword)
                // setTimeout(window.location.reload(), 5000)
            }
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
                        <div className="text-center" style={{ fontSize: '20px' }}>Account setting</div>
                        <div className="mt-5">
                            <MDBContainer className="boxshadowuserprofile p-4">
                                <small className="font-weight-bold mb-5">Account information</small>
                                <div className="row pt-3 mt-3">
                                    <div className="col-3 text-muted">
                                        Username
                                    </div>
                                    <div className="col-8" style={{ textAlign: 'left' }}>
                                        {this.props.username}
                                    </div>
                                </div>
                                <div className="row pt-3 mt-3">
                                    <div className="col-auto d-inline" onClick={this.onPressChangePassword}>
                                        <a href="javascript:void(0)" style={{ textDecoration: 'underline' }}>Change password</a>
                                    </div>
                                </div>
                                {this.state.isChangePass
                                    ?
                                    <>
                                    </>
                                    :
                                    <div>
                                        <div className="row">
                                            <div className="col-12 text-muted">
                                                <a className="float-right" onClick={this.viewPassword}>
                                                    {
                                                        this.state.type == "password"
                                                            ?
                                                            <VisibilityOffIcon />
                                                            :
                                                            <VisibilityIcon />
                                                    }
                                                </a>
                                                <MDBInput label="Old password" type={this.state.type} inputRef={(oldPassword) => this.oldPassword = oldPassword} />
                                                <MDBInput label="New password" type={this.state.type} inputRef={(newPassword) => this.newPassword = newPassword} />
                                                <MDBInput label="Confirm new password" type={this.state.type} inputRef={(confirmNewPassword) => this.confirmNewPassword = confirmNewPassword} />
                                                <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>Change password</MDBBtn>
                                                <MDBBtn outline color='stylish-color-dark' onClick={this.onBtnCancel}>cancel</MDBBtn>
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
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps, { changePassword })(UserAccount);