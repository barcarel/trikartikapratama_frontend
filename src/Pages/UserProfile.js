import React, { Component } from 'react';
import SideNavigation from '../Components/SideNavigation'
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'

class UserProfile extends Component {

    onBtnSave = () => {
        var firstname = this.firstName.value
        var lastname = this.lastName.value
        var company  = this.company.value
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div className="text-center" style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                        <h1>Profile Page</h1>
                        <div className="mt-5">
                            <MDBContainer>
                                <MDBInput label="First Name" inputRef={(firstName) => this.firstName = firstName} />
                                <MDBInput label="Last Name" inputRef={(lastName) => this.lastName = lastName} />
                                <MDBInput label="Company" inputRef={(company) => this.company = company} />
                                <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>save</MDBBtn>
                            </MDBContainer>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}

export default UserProfile;