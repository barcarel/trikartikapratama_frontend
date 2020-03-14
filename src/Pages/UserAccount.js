import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import SideNavigation from '../Components/SideNavigation'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'

class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div className="text-center" style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                        <h1>Account setting</h1>
                        <div className="mt-5">
                            <MDBContainer>
                                {/* <MDBInput label="Old Username" inputRef={(username) => this.username = username} />
                                <MDBInput label="Last Name" inputRef={(lastName) => this.lastName = lastName} />
                                <MDBInput label="Company" inputRef={(company) => this.company = company} />
                                <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>save</MDBBtn> */}
                                <div className="row">
                                    <div className="col-auto">
                                        username
                                    </div>
                                    <div className="col-8" style={{textAlign: 'left'}}>
                                        <input ></input>
                                    </div>

                                </div>
                            </MDBContainer>
                        </div>
                    </div>

                </main>
            </div>
         );
    }
}
 
export default UserAccount;