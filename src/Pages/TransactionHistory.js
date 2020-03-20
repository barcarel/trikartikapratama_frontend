import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'

class TransactionHistory extends Component {

    render() { 
        return ( 
            <div>
                <Header />
                <MenuNavBar />
                <div className="body">
                    <div className="container">
                        
                    </div>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default TransactionHistory;