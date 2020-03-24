import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu'
import { MDBContainer, MDBInputGroup, MDBBtn, MDBInput } from "mdbreact";
import Swal from 'sweetalert2'
import Axios from 'axios'
import { login } from '../redux/action'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

class UserLogin extends Component {

    state = {
        redirect: false,
        type: "password"
    }

    viewPassword = () => {
        if (this.state.type == 'password') {
            this.setState({ type: "text" })
        } else {
            this.setState({ type: "password" })
        }
    }

    onBtnLogIn = () => {
        var username = this.username.value
        var password = this.password.value
        var role = 'user'

        console.log(username, password, role)

        if (username && password) {
            this.props.login(username, password, role)
        } else {
            Swal.fire({
                icon: 'error',
                text: 'please input all necessary forms'
            })
        }
    }

    // confirmPasswordChecker = () => {
    //     var password = this.password.value
    //     var confirmpassword = this.confirmPassword.value

    //     if (password != confirmpassword) {

    //     }
    // }

    render() {
        if (localStorage.getItem('token')) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-8">
                            <div>
                                <nav className="navbar userlogin-navbar">
                                    <div className="container flex-row-reverse pr-4">
                                        <div className="d-flex" style={{ opacity: "0.9" }}>Your reliable UPS Supplier in Indonesia</div>
                                    </div>
                                </nav>
                                <div className="container">
                                    <div className="d-flex flex-row-reverse pr-4">
                                        <img className="img-fluid" src={require('../img/logo/logo_tkp_final.png')} alt="header-logo" style={{ width: "60vh", maxWidth: "100%", height: "auto", paddingTop: "1%", paddingBottom: "1%" }} />
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                    <div className="row" style={{ height: '82vh' }}>
                        <div className="col-4 pt-5">
                            <div className="p-5">
                                <div className="text-center">
                                    <p style={{ fontSize: '3vh' }}>
                                        log in to existing account
                                </p>
                                </div>
                                <MDBContainer>
                                    <MDBInput label="Username" focu inputRef={(username) => this.username = username} />
                                    <a className="float-right" onClick={this.viewPassword}>
                                        {
                                            this.state.type == "password"
                                                ?
                                                <VisibilityOffIcon />
                                                :
                                                <VisibilityIcon />
                                        }
                                    </a>
                                    <br />
                                    <MDBInput type={this.state.type} label="Password" inputRef={(password) => this.password = password} />
                                    <div className="text-center">
                                        <Link to='/userlogin'>
                                            <MDBBtn color='red darken-4' onClick={this.onBtnLogIn}>log in</MDBBtn>
                                        </Link>
                                        <Link to='/register'>
                                            <MDBBtn outline color='red darken-4'>register</MDBBtn>
                                        </Link>
                                        <div className="mt-2">
                                            forgot password?
                                        </div>
                                    </div>
                                </MDBContainer>
                            </div>
                        </div>
                        <div className="col-8">
                            <img width="100%" height="100%" style={{ objectFit: 'cover' }} alt="bgRegister" src={require('../img/websiteimg/bgRegister.jpg')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = ({ user }) => {
//     return {
//         ...user
//     }
// }

export default connect(null, { login })(UserLogin);