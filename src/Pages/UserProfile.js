import React, { Component } from 'react';
import SideNavigation from '../Components/SideNavigation'
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from 'mdbreact'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Swal from 'sweetalert2'
import { userUpdateDetail } from '../redux/action'
import { connect } from 'react-redux'

class UserProfile extends Component {

    onBtnSave = () => {
        var firstname = this.firstName.value
        var lastname = this.lastName.value
        var company = this.company.value
        var id = this.props.id

        this.props.userUpdateDetail(id, firstname, lastname, company)
        // Swal.fire({
        //     icon: 'success',
        //     text: 'succesfully updated information'
        // })
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div className="text-center" style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                        <h1>Profile setting</h1>
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
const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps, { userUpdateDetail })(UserProfile);