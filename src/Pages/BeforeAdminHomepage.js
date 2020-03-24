import React, { Component } from 'react';
import AdminNavbar from '../Components/AdminNavbar'
import ReceiptIcon from '@material-ui/icons/Receipt';
import { Link } from 'react-router-dom'
import { MDBLink } from 'mdbreact'

class BeforeAdminHomepage extends Component {

    render() {
        return (
            <div>
                <AdminNavbar />
                <div className="row" style={{ height: '46vh' }}>
                    <div className="col ml-3 mr-3 mt-3 generateboxshadow text-center align-items-center" style={{ backgroundColor: '#B23833' }}>
                        <div style={{ marginTop: '21vh' }}>
                            <Link to='/adminusercontrol'>
                                <div style={{ color: 'white', fontSize: '3vh' }}>
                                    USERS
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mr-3 mt-3 text-center generateboxshadow" style={{ backgroundColor: '#2196f3' }}>
                        <div style={{ marginTop: '21vh' }}>
                            <Link to='/admintransactionpanel'>
                                <div style={{ color: 'white', fontSize: '3vh' }}>
                                    TRANSACTIONS
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ height: '47vh' }}>
                    <div className="col ml-3 mt-3 mb-3 generateboxshadow text-center" style={{ backgroundColor: '#8bab80' }}>
                        <div style={{ marginTop: '21vh' }}>
                            <Link to='/adminhomepage'>
                                <div style={{ color: 'white', fontSize: '3vh' }}>
                                    PRODUCTS
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col ml-3 mr-3 mt-3 mb-3 generateboxshadow text-center" style={{ backgroundColor: '#575757' }}>
                        <div style={{ marginTop: '21vh' }}>
                            <Link to='/'>
                                <div style={{ color: 'white', fontSize: '3vh' }}>
                                    GO TO WEBSITE
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeforeAdminHomepage;