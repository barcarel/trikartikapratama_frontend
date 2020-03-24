import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers } from '../redux/action'
import AdminNavbar from '../Components/AdminNavbar'
import { MDBDataTable } from 'mdbreact'

class AdminUserControl extends Component {

    state = {
    }

    componentDidMount() {
        var role = "user"
        this.props.getAllUsers(role)
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Username',
                    field: 'username',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'First Name',
                    field: 'firstname',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Last Name',
                    field: 'lastname',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Phone Number',
                    field: 'phoneno',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Company',
                    field: 'company',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: this.props.data
        }
        return (
            <div className="body" style={{minHeight: '100vh'}}>
                <AdminNavbar />
                <div className="text-center mt-5">
                    <h4>Users</h4>
                    <p className="text-muted">All users registered in PT. Tri Kartika Pratama. </p>
                </div>
                <div className="m-5">
                    <MDBDataTable
                        noBottomColumns
                        striped
                        bordered
                        hover
                        barReverse
                        btn
                        responsive
                        small
                        theadColor="black"
                        entriesLabel=""
                        entriesOptions={[ 10, 15,20,25,30,35,40,45,50 ]}
                        infoLabel={["Showing", "to", "of", "users"]}
                        data={data}
                        noRecordsFoundLabel="Zero records to render"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ allusers }) => {
    console.log(allusers)
    return {
        ...allusers
    }
}

export default connect(mapStateToProps, { getAllUsers })(AdminUserControl);