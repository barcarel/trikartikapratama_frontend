import React, { Component } from 'react';
import Swal from 'sweetalert2'
import HomeIcon from '@material-ui/icons/Home';
import { Link, Redirect } from 'react-router-dom'
import Axios from '../../../../cinemaxnxx-react/cinema/node_modules/axios';
import { API_URL } from '../support/API_URL';
import { connect } from 'react-redux'
import { login } from '../redux/action'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidUpdate() {
        if (this.props.username) {
            // console.log('login', this.props.username)
            this.setState({ redirect: true })
        }
    }

    onBtnLogIn = () => {

        var username = this.refs.username.value
        var password = this.refs.password.value
        var role = 'admin'

        if (username && password) {
            this.props.login(username, password, role)
            // if(this.props.username){
            //     this.setState({redirect: true})
            // }
        } else {
            Swal.fire({
                icon: 'error',
                text: 'please fill in username and password'
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/admincontrolroom'></Redirect>
            )
        }
        return (
            <div>
                <nav className="navbar admin navbar-fixed-top">
                    <div className="">
                        Admin
                        </div>
                    <div className="navbar-right">
                        <Link to='/'>
                            <HomeIcon /> View website
                        </Link>
                    </div>
                </nav>
                <div className="container text-center">
                    <div style={{ marginTop: "10vh" }}>
                        <form>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" ref="username" name="username" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" ref="password" />
                            </div>
                            {/* <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                            <button type="button" className="btn btn-outline-danger" style={{ width: "20vh" }} onClick={this.onBtnLogIn}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStatetoProps, { login })(Admin);