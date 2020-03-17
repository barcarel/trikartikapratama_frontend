import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'

class UserCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <MenuNavBar />
                HALAMAN CHECK OUT
                <Footer />
            </div>
         );
    }
}
 
export default UserCheckout;