import React, { Component } from 'react';
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu';
import { Link } from 'react-router-dom'

class notfound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* <Header /> */}
                {/* <NavBarMenu /> */}
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404"></div>
                        <h1>404</h1>
                        <h2>Oops! Page Not Be Found</h2>
                        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                        <Link to='/'>
                            <a style={{color: "red"}}>Back to homepage</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default notfound;