import React, { Component } from 'react';
import SideNavigation from '../Components/SideNavigation'
import { MDBInput, MDBContainer, MDBRow, MDBBtn, MDBBadge } from 'mdbreact'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import Swal from 'sweetalert2'
import { userUpdateDetail } from '../redux/action'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class UserProfile extends Component {

    componentDidMount() {
        console.log(this.props.firstname)
    }

    state = {
        isEdit: false,
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

        if ((this.props.firstname != firstname) || (this.props.lastname != lastname) || (this.props.phoneno != phoneno) || (this.props.company != company)) {
            if (firstname || lastname || phoneno || company) {
                this.props.userUpdateDetail(id, firstname, lastname, phoneno, company)
                this.setState({ isEdit: !this.state.isEdit })
            }
        } else {
            this.setState({ isEdit: !this.state.isEdit })
        }
    }

    onBtnEdit = () => {
        this.setState({ isEdit: !this.state.isEdit })
    }

    onBtnCancel = () => {
        var firstname = this.firstName.value
        var lastname = this.lastName.value
        var phoneno = this.phoneNo.value
        var company = this.company.value

        // console.log(this.props.firstname, firstname)
        if ((this.props.firstname != firstname) || (this.props.lastname != lastname) || (this.props.phoneno != phoneno) || (this.props.company != company)) {
            // if ((this.props.firstname != firstname) || lastname || phoneno || company) {
            Swal.fire({
                title: 'Cancel changes?',
                icon: 'info',
                text: 'You have made some changes. Are you sure you want to cancel?',
                showCancelButton: true,
                cancelButtonText: 'no',
                confirmButtonText: 'yes, cancel',
            }).then((result) => {
                if (result.value) {
                    this.setState({ isEdit: !this.state.isEdit })
                }
            })
        } else {
            this.setState({ isEdit: !this.state.isEdit })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <SideNavigation />
                <main id="content" className="p-5">
                    <div style={{ marginLeft: '30vh', marginRight: '30vh' }}>
                        <div className="text-center" style={{ fontSize: '20px' }}>Profile setting</div>
                        <div className="mt-5">
                            <MDBContainer>
                                {this.state.isEdit
                                    ?
                                    <small className="text-muted">Personal information </small>
                                    :
                                    <div>
                                        <small className="text-muted">Personal information </small>
                                        <MDBBadge tag="a" className="ml-2" color="info-color" onClick={this.toggleEdit}>edit</MDBBadge>
                                    </div>
                                }
                                {this.state.isEdit
                                    ?
                                    <div>
                                        <MDBInput label="First Name" valueDefault={this.props.firstname} inputRef={(firstName) => this.firstName = firstName} />
                                        <MDBInput label="Last Name" valueDefault={this.props.lastname} inputRef={(lastName) => this.lastName = lastName} />
                                        <MDBInput label="Phone no" valueDefault={this.props.phoneno} type="number" inputRef={(phoneNo) => this.phoneNo = phoneNo} />
                                        <MDBInput label="Company" valueDefault={this.props.company} inputRef={(company) => this.company = company} />
                                        <MDBBtn outline color='blue darken-4' onClick={this.onBtnSave}>save</MDBBtn>
                                        <MDBBtn outline color='stylish-color-dark' onClick={this.onBtnCancel}>cancel</MDBBtn>
                                    </div>
                                    :
                                    <div>
                                        <div className="row pt-3 mt-3">
                                            <div className="col-3 text-muted">
                                                First Name
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.firstname}
                                            </div>
                                        </div>
                                        <div className="row pt-3 mt-2">
                                            <div className="col-3 text-muted">
                                                Last Name
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.lastname}
                                            </div>
                                        </div>
                                        <div className="row pt-3 mt-2">
                                            <div className="col-3 text-muted">
                                                Phone Number
                                    </div>
                                            <div className="col-8" style={{ textAlign: 'left' }}>
                                                {this.props.phoneno}
                                            </div>
                                        </div>
                                        <div className="row pt-3 mt-2">
                                            <div className="col-3 text-muted">
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
const mapStateToProps = ({ user }) => {
    console.log('MAP', user)
    return {
        ...user,
        // ...userupdateinfo
    }
}

export default connect(mapStateToProps, { userUpdateDetail })(UserProfile);