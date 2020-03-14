import React, { Component } from 'react';
import SideNavigation from '../Components/SideNavigation'


class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <SideNavigation />
                 <main id="content" className="p-5">
                    <p>HALAMAN USER ACCOUNT</p>

                </main>
            </div>
         );
    }
}
 
export default UserAccount;