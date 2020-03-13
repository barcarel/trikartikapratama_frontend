import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu'
import { MDBContainer, MDBInputGroup, MDBBtn, MDBInput } from "mdbreact";
import Swal from 'sweetalert2'
import Axios from 'axios'
import { login, register } from '../redux/action'
import { connect } from 'react-redux'

class Register extends Component {

    state = {
        redirect: false
    }

    onBtnRegister = () => {
        var username = this.username.value
        var password = this.password.value
        var confirmpassword = this.confirmPassword.value
        var role = 'user'

        console.log(password, confirmpassword)

        if (username && password && confirmpassword) {
            if (password !== confirmpassword) {
                Swal.fire({
                    icon: 'error',
                    text: 'invalid confirm password'
                })
            } else {
                this.props.register(username, password, role)
                Swal.fire({
                    icon: 'success',
                    text: 'successfully created an account!'
                })
                this.setState({redirect: true})
            }
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
        if (this.state.redirect) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div>
                {/* <NavBarMenu /> */}
                {/* <div className="container"> */}
                <div>
                    <div className="row">
                        <div className="col-8">
                            <div>
                                <nav className="navbar register-navbar">
                                    <div className="container pl-4">
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
                            <img width="100%" height="100%" style={{ objectFit: 'cover' }} alt="bgRegister" src={require('../img/websiteimg/bgRegister.jpg')} />
                        </div>
                        <div className="col-4 pt-5">
                            <div className="p-5">
                                {/* <div className="">home</div> */}
                                <div className="text-center">
                                    <p style={{ fontSize: '3vh' }}>
                                        register
                                </p>
                                </div>
                                <MDBContainer>
                                    {/* <MDBInputGroup material containerClassName="mb-3" prepend="First Name" hint="Michael" inputRef={(firstName) => this.firstName = firstName}/> */}
                                    {/* <MDBInput label="First Name" inputRef={(firstName) => this.firstName = firstName} />
                                    <MDBInput label="Last Name" inputRef={(lastName) => this.lastName = lastName} /> */}
                                    <MDBInput label="Username*" inputRef={(username) => this.username = username} />
                                    <MDBInput type="password" label="Password*" inputRef={(password) => this.password = password} />
                                    <MDBInput type="password" label="Confirm Password*" inputRef={(confirmPassword) => this.confirmPassword = confirmPassword} />
                                    <div className="text-center">
                                        <Link to='/userlogin'>
                                            <MDBBtn outline color='red darken-4'>log in</MDBBtn>
                                        </Link>
                                        <MDBBtn color='red darken-4' onClick={this.onBtnRegister}>register</MDBBtn>
                                        <div className="mt-2">
                                            forgot password?
                                        </div>
                                    </div>
                                </MDBContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        );
    }
}

const mapStatetoProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStatetoProps, { login, register })(Register);