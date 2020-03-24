import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu'
import { MDBContainer, MDBInputGroup, MDBBtn, MDBInput } from "mdbreact";
import Swal from 'sweetalert2'
import Axios from 'axios'
import { login, register, getAllUsers } from '../redux/action'
import { connect } from 'react-redux'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

class Register extends Component {

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

    componentDidMount() {
        var role = "user"
        this.props.getAllUsers(role)
    }

    onBtnRegister = () => {
        var username = this.username.value
        var password = this.password.value
        var confirmpassword = this.confirmPassword.value
        var role = 'user'
        var isExist = false

        console.log(password, confirmpassword)

        if (username && password && confirmpassword) {
            if (password !== confirmpassword) {
                Swal.fire({
                    icon: 'error',
                    text: 'invalid confirm password'
                })
            } else {
                for (var i = 0; i < this.props.data.length; i++) {
                    if (username == this.props.data[i].username) {
                        Swal.fire({
                            icon: 'error',
                            text: 'this username has already been taken.'
                        })
                        isExist = true
                        break
                    } else {
                        isExist = false
                    }
                }

                if (!isExist) {
                    this.registerTheUser(username, password, role)
                }

            }
        } else {
            Swal.fire({
                icon: 'error',
                text: 'please complete the register form.'
            })
        }
    }

    registerTheUser = (username, password, role) => {
        this.props.register(username, password, role)
        Swal.fire({
            icon: 'success',
            text: 'successfully created an account!'
        })
        this.setState({ redirect: true })
    }

    // confirmPasswordChecker = () => {
    //     var password = this.password.value
    //     var confirmpassword = this.confirmPassword.value

    //     if (password != confirmpassword) {

    //     }
    // }

    render() {
        if (this.state.redirect || localStorage.getItem('token')) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div>
                {/* <NavBarMenu /> */}
                {/* <div className="container"> */}
                <div className="row">
                    <div className="col-8">
                        <div>
                            <nav className="navbar register-navbar">
                                <div className="container pl-4">
                                    <div style={{ opacity: "0.9" }}>Your reliable UPS Supplier in Indonesia</div>
                                </div>
                            </nav>
                            <div className="container">
                                <div className="d-flex ">
                                    <div className="pl-4">
                                        <img className="img-fluid" src={require('../img/logo/logo_tkp_final.png')} alt="header-logo" style={{ width: "60vh", maxWidth: "100%", height: "auto", paddingTop: "1%", paddingBottom: "1%" }} />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
                <div className="row" style={{ height: '82vh' }}>
                    <div className="col-8">
                        <img width="100%" height="102%" style={{ objectFit: 'cover' }} alt="bgRegister" src={require('../img/websiteimg/handshakebg.jpg')} />
                    </div>
                    <div className="col-4 pt-5">
                        <div className="p-5">
                            {/* <div className="">home</div> */}
                            <div className="text-center">
                                <p style={{ fontSize: '3vh' }}>
                                    register an account
                                </p>
                            </div>
                            {/* <MDBContainer> */}
                                <MDBInput label="Username*" inputRef={(username) => this.username = username} />
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
                                <MDBInput type={this.state.type} label="Password*" inputRef={(password) => this.password = password} />
                                <MDBInput type={this.state.type} label="Confirm Password*" inputRef={(confirmPassword) => this.confirmPassword = confirmPassword} />
                                <div className="text-center">
                                    <MDBBtn color='red darken-4' onClick={this.onBtnRegister}>register</MDBBtn>
                                    <Link to='/userlogin'>
                                        <MDBBtn outline color='red darken-4'>log in</MDBBtn>
                                    </Link>
                                    <div className="mt-2">
                                        forgot password?
                                        </div>
                                </div>
                            {/* </MDBContainer> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = ({ user, allusers }) => {
    console.log(allusers)
    return {
        ...user,
        ...allusers
    }
}

export default connect(mapStatetoProps, { login, register, getAllUsers })(Register);