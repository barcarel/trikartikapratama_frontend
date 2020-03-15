import React, { Component } from 'react';
import SideNavigation from '../Components/SideNavigation'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'

class UserTransction extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                    <div className="text-center" style={{ fontSize: '20px'}}>Transaction setting</div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default UserTransction;