import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'
import { MDBCardHeader, MDBCardBody, MDBCardFooter, MDBBtn, MDBNavLink, MDBNavItem, MDBTabContent, MDBTabPane, MDBContainer, MDBNav } from 'mdbreact'
import moment from 'moment'
import { API_URL } from '../support/API_URL';
import AdminNavbar from '../Components/AdminNavbar'
import { getProductDetail, deleteUserTransaction, changeTransactionStatus, getAllProducts } from '../redux/action'
import Swal from 'sweetalert2';

class AdminTransactionPanel extends Component {

    state = {
        data: [],
        accepteddata: [],
        productdetail: [],
        denieddata: [],
        activeItem: "1"
    }

    toggle = (tab) => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            })
        }
    }

    componentDidMount() {
        this.getTransactions("pending")
        this.getSuccessfulTransaction()
        this.getDeniedTransaction()
        this.props.getAllProducts()
    }

    getTransactions = (status) => {
        Axios.get(API_URL + `/cart/getAllTransactions?status=${status}`)
            .then((res) => {
                var data = `data${status}`
                this.setState({ data: res.data })
            })
            .catch((err) => console.log(err))
    }

    getSuccessfulTransaction = () => {
        var status = "accepted"
        Axios.get(API_URL + `/cart/getAllTransactions?status=${status}`)
            .then((res) => {
                this.setState({ accepteddata: res.data })
            })
            .catch((err) => console.log(err))
    }

    getDeniedTransaction = () => {
        var status = "denied"
        Axios.get(API_URL + `/cart/getAllTransactions?status=${status}`)
            .then((res) => {
                this.setState({ denieddata: res.data })
            })
            .catch((err) => console.log(err))
    }

    getProducts = (idproduct) => {
        var products = idproduct.split(',')
        var coma = products.pop()
        console.log(products)
        console.log(this.props.data)
        var array = []
        for (var i = 0; i < products.length; i++) {
            this.props.data.map((val) => {
                if (val.id == products[i]) {
                    array.push(val.name)
                }
            })
        }
        // console.log(array)
        return array.map((val, id) => {
            // console.log(id)
            return (
                <div>{array[id]}</div>
            )
        })
    }

    onBtnAccept = (idtransaction) => {
        Swal.fire({
            title: 'Accept transaction?',
            icon: 'info',
            text: 'once you accept, you cannot undo this action. Are you sure you want to accept this transaction?',
            showCancelButton: true,
            cancelButtonText: 'no',
            confirmButtonText: 'yes, accept',
        }).then((result) => {
            if (result.value) {
                this.props.changeTransactionStatus("accepted", idtransaction)
                Swal.fire({
                    icon: 'success',
                    text: 'transaction accepted'
                })
                window.location.reload()
            }
        })

    }

    onBtnDecline = (iduser, idtransaction) => {

        Swal.fire({
            title: 'decline transaction?',
            icon: 'error',
            text: 'are you sure you want to decline this transaction?',
            showCancelButton: true,
            cancelButtonText: 'no',
            confirmButtonText: 'yes, decline',
            confirmButtonColor: '#D32F2F'
        }).then((result) => {
            if (result.value) {
                // this.props.deleteUserTransaction(iduser, idtransaction)
                this.props.changeTransactionStatus("denied", idtransaction)
                Swal.fire({
                    icon: 'success',
                    text: 'transaction denied'
                })
                window.location.reload()
            }
        })
    }



    renderSuccesfullTransactionData = () => {
        return this.state.accepteddata.map((val, id) => {
            return (
                <div style={{ width: "100%" }} className="transactioncard-admin mt-5">
                    <MDBCardHeader color="green darken-3" style={{ color: 'white' }}>
                        transaction date: {moment(val.transactiontime).format('DD MMMM YYYY, dddd,  h:mm:ss a')}
                    </MDBCardHeader>
                    {/* <div className="ml-4 mt-3">
                    </div> */}
                    <MDBCardBody>
                        <div className="d-flex justify-content-between">
                            <div class="d-flex flex-column">
                                <small className="text-muted">Transaction ID </small>
                                <span className="font-weight-bold" style={{ fontSize: '2.5vh' }}>
                                    {val.idtransaction}
                                </span>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="text-muted">ID User: </div>
                                    <div className="text-muted">Full Name: </div>
                                    <div className="text-muted">Phone Number:  </div>
                                    <div className="text-muted"> Address: </div>
                                    <div className="text-muted"> Province: </div>
                                    <div className="text-muted"> City: </div>
                                    <div className="text-muted"> Note: </div>
                                </div>
                                <div className="col-auto">
                                    {val.iduser}
                                    <br />
                                    {val.fullname}
                                    <br />
                                    {val.phoneno}
                                    <br />
                                    {val.address}
                                    <br />
                                    {val.province}
                                    <br />
                                    {val.city}
                                    <br />
                                    {val.note}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="text-muted"> Products:</div>
                                </div>
                                <div className="col-auto">
                                    {this.getProducts(val.idproduct)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="text-muted"> Transfer to:</div>
                                    <div className="text-muted"> Total price:</div>
                                </div>
                                <div className="col-auto">
                                    {val.bank}
                                    <br />
                                    Rp {parseInt(val.totalprice).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </div>
            )
        })
    }

    renderDeniedtransactionData = () => {
        return this.state.denieddata.map((val, id) => {
            return (
                <div style={{ width: "100%" }} className="transactioncard-admin mt-5">
                    <MDBCardHeader color="red darken-3" style={{ color: 'white' }}>
                        transaction date: {moment(val.transactiontime).format('DD MMMM YYYY, dddd,  h:mm:ss a')}
                    </MDBCardHeader>
                    {/* <div className="ml-4 mt-3">
                    </div> */}
                    <MDBCardBody>
                        <div className="d-flex justify-content-between">
                            <div class="d-flex flex-column">
                                <small className="text-muted">Transaction ID </small>
                                <span className="font-weight-bold" style={{ fontSize: '2.5vh' }}>
                                    {val.idtransaction}
                                </span>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="text-muted">ID User: </div>
                                    <div className="text-muted">Full Name: </div>
                                    <div className="text-muted">Phone Number:  </div>
                                    <div className="text-muted"> Address: </div>
                                    <div className="text-muted"> Province: </div>
                                    <div className="text-muted"> City: </div>
                                    <div className="text-muted"> Note: </div>
                                </div>
                                <div className="col-auto">
                                    {val.iduser}
                                    <br />
                                    {val.fullname}
                                    <br />
                                    {val.phoneno}
                                    <br />
                                    {val.address}
                                    <br />
                                    {val.province}
                                    <br />
                                    {val.city}
                                    <br />
                                    {val.note}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="text-muted"> Products:</div>
                                </div>
                                <div className="col-auto">
                                    {this.getProducts(val.idproduct)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="text-muted"> Transfer to:</div>
                                    <div className="text-muted"> Total price:</div>
                                </div>
                                <div className="col-auto">
                                    {val.bank}
                                    <br />
                                    Rp {parseInt(val.totalprice).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </div>
            )
        })
    }

    renderSuccessfulTransaction = () => {
        return (
            <div className="mt-5 mb-4">
                <h3>Successful Transactions History</h3>
                <div className="text-muted">User transactions that were confirmed in the past.</div>
                <div>
                    {this.renderSuccesfullTransactionData()}
                </div>
            </div>
        )
    }

    renderDeniedTransaction = () => {
        return (
            <div className="mt-5 mb-4">
                <h3>Declined Transactions History</h3>
                <div className="text-muted">User transactions that were declined in the past.</div>
                <div>
                    {this.renderDeniedtransactionData()}
                </div>
            </div>
        )
    }

    renderPendingTransaction = () => {
        return (
            <div className="mt-5 mb-4">
                <h3>Pending Transactions</h3>
                <div className="text-muted">Transactions from users that are waiting for confirmation. Accept payment if user has transfered, otherwise decline.</div>
                <div>
                    {this.renderPendingTransactionData()}
                </div>
            </div>
        )
    }



    renderPendingTransactionData = () => {
        return this.state.data.map((val, id) => {
            if (val.length == 0) {
                return (
                    <div className="text-muted">You have no pending transactions.</div>
                )
            } else {
                return (
                    <div style={{ width: "100%" }} className="transactioncard-admin mt-5">
                        <MDBCardHeader color="blue darken-3" style={{ color: 'white' }}>
                            transaction date: {moment(val.transactiontime).format('DD MMMM YYYY, dddd,  h:mm:ss a')}
                        </MDBCardHeader>
                        {/* <div className="ml-4 mt-3">
                    </div> */}
                        <MDBCardBody>
                            <div className="d-flex justify-content-between">
                                <div class="d-flex flex-column">
                                    <small className="text-muted">Transaction ID </small>
                                    <span className="font-weight-bold" style={{ fontSize: '2.5vh' }}>
                                        {val.idtransaction}
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="text-muted">ID User: </div>
                                        <div className="text-muted">Full Name: </div>
                                        <div className="text-muted">Phone Number:  </div>
                                        <div className="text-muted"> Address: </div>
                                        <div className="text-muted"> Province: </div>
                                        <div className="text-muted"> City: </div>
                                        <div className="text-muted"> Note: </div>
                                    </div>
                                    <div className="col-auto">
                                        {val.iduser}
                                        <br />
                                        {val.fullname}
                                        <br />
                                        {val.phoneno}
                                        <br />
                                        {val.address}
                                        <br />
                                        {val.province}
                                        <br />
                                        {val.city}
                                        <br />
                                        {val.note}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="text-muted"> Products:</div>{this.getProducts(val.idproduct)}
                                        <br />
                                        <div className="text-muted"> Transfer to: </div> {val.bank}
                                        <div className="text-muted"> Total price:  </div> Rp {parseInt(val.totalprice).toLocaleString()}
                                    </div>
                                    {/* <div className="col-auto">
                                        {this.getProducts(val.idproduct)}
                                        <br />
                                        <br />
                                        {val.bank}
                                        <br />
                                        Rp {parseInt(val.totalprice).toLocaleString()}
                                    </div> */}
                                </div>
                                <div className="col-auto">
                                    <MDBBtn onClick={() => this.onBtnAccept(val.idtransaction)} size="md" color="blue darken-4">ACCEPT PAYMENT</MDBBtn>
                                    <MDBBtn onClick={() => this.onBtnDecline(val.iduser, val.idtransaction)} size="md" color="red darken-4">DECLINE</MDBBtn>
                                </div>
                            </div>
                        </MDBCardBody>
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div style={{ minHeight: '100vh' }} className="body">
                <AdminNavbar />
                <div className="text-center mt-5">
                    <h4>Transactions</h4>
                </div>
                <MDBContainer>
                    <div className="text-center mt-5">
                        <MDBBtn color="blue darken-4" active={this.state.activeItem === "1"} onClick={() => this.toggle("1")} role="tab" >pending</MDBBtn>
                        <MDBBtn color="green darken-4" active={this.state.activeItem === "2"} onClick={() => this.toggle("2")} role="tab" >ACCEPTED</MDBBtn>
                        <MDBBtn color="red darken-4" active={this.state.activeItem === "3"} onClick={() => this.toggle("3")} role="tab" >DECLINED</MDBBtn>
                    </div>
                    <MDBTabContent activeItem={this.state.activeItem} >
                        <MDBTabPane tabId="1" role="tabpanel">
                            <p className="mt-2">
                                {this.renderPendingTransaction()}
                            </p>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            <p className="mt-2">
                                {this.renderSuccessfulTransaction()}
                            </p>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                            <p className="mt-2">
                                {this.renderDeniedTransaction()}
                            </p>
                        </MDBTabPane>
                    </MDBTabContent>
                </MDBContainer>
            </div>
        )
    }

}

const mapStateToProps = ({ allproducts, product }) => {
    // console.log(allproducts.data)
    return {
        ...allproducts,
        ...product
    }
}

export default connect(mapStateToProps, { getProductDetail, deleteUserTransaction, changeTransactionStatus, getAllProducts })(AdminTransactionPanel);