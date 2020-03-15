import React, { Component } from 'react';
import SideNavigation from '../Components/SideNavigation'
import { MDBInput, MDBContainer, MDBRow, MDBBtn, MDBBadge } from 'mdbreact'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import Swal from 'sweetalert2'
import { userUpdateDetail } from '../redux/action'
import { connect } from 'react-redux'

class UserProfile extends Component {

    componentDidMount() {
        console.log(this.props.firstname)
    }

    state = {
        isEdit: false
    }

    toggleEdit = () => {
        this.setState({ isEdit: !this.state.isEdit })
    }

    onBtnSave = () => {
        var firstname = this.firstName.value
        var lastname = this.lastName.value
        var phoneno = this.phoneNo.value
        var company = this.company.value
        var id = this.props.id
        // console.log(firstname, lastname, phoneno, company)
        this.props.userUpdateDetail(id, firstname, lastname, phoneno, company)
        // window.location.reload()
    }

    onBtnEdit = () => {
        this.setState({ isEdit: true })
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                        <div className="text-center" style={{ fontSize: '20px'}}>Profile setting</div>
                        <div className="mt-5">
                            <MDBContainer>
                                <small className="text-muted">Personal information <MDBBadge className="float-right badge-edit" color="primary" onClick={this.toggleEdit}>edit</MDBBadge></small>
                                {this.state.isEdit
                                    ?
                                    <div>
                                        <MDBInput label="First Name" inputRef={(firstName) => this.firstName = firstName} />
                                        <MDBInput label="Last Name" inputRef={(lastName) => this.lastName = lastName} />
                                        <MDBInput label="Phone no" type="number" inputRef={(phoneNo) => this.phoneNo = phoneNo} />
                                        <MDBInput label="Company" inputRef={(company) => this.company = company} />
                                        <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>save</MDBBtn>
                                    </div>
                                    :
                                    <div>
                                        <div className="row pt-3 mt-3">
                                            <div className="col-auto text-muted">
                                                First Name
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.firstname}
                                            </div>
                                        </div>
                                        <div className="row pt-3 mt-3">
                                            <div className="col-auto text-muted">
                                                Last Name
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.lastname}
                                            </div>
                                        </div>
                                        <div className="row pt-3 mt-3">
                                            <div className="col-auto text-muted">
                                                Phone Number
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.phoneno}
                                            </div>
                                        </div>
                                        <div className="row pt-3 mt-3">
                                            <div className="col-auto text-muted">
                                                Company
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.company}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </MDBContainer>
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = ({ user, userupdateinfo }) => {
    return {
        ...user,
        ...userupdateinfo
    }
}

export default connect(mapStateToProps, { userUpdateDetail })(UserProfile);