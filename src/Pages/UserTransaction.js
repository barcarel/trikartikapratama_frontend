import React, { Component } from 'react';
import { connect } from 'react-redux'
import SideNavigation from '../Components/SideNavigation'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { getUserTransaction, deleteUserTransaction } from '../redux/action'
import HistoryIcon from '@material-ui/icons/History';
import { API_URL } from "../support/API_URL";
import { MDBBtn, MDBCard, MDBCardHeader, MDBCardTitle, MDBCardBody, MDBFooter, MDBCardFooter } from 'mdbreact';
import moment from 'moment'
import Swal from 'sweetalert2'

class UserTransction extends Component {

    state = {
        subtotalarray: 0
    }

    componentDidUpdate() {
        if (this.props.id) {
            this.props.getUserTransaction(this.props.id)
            // this.renderProduct()
        }
    }

    // renderProduct = () => {
    //     var array = []
    //     this.props.data.map((val, index) => {
    //         var idprod = val.idproduct
    //         for (var i = 0; i < idprod.length; i++) {
    //             if (i % 2 == 0) {
    //                 array.push((val.idproduct).charAt(i))
    //             }
    //         }
    //     })
    //     console.log(array)
    // }

    printSubTotal = (id) => {
        var subtotal = this.props.data[id].productqty.length / 2
        return subtotal
    }

    onBtnCancel = (iduser, idtransaction) => {
        Swal.fire({
            title: 'Cancel transaction?',
            icon: 'info',
            text: 'You are about to cancel this transaction. Are you sure you want to cancel?',
            showCancelButton: true,
            cancelButtonText: 'no',
            confirmButtonText: 'yes, cancel',
        }).then((result) => {
            if (result.value) {
                this.props.deleteUserTransaction(iduser, idtransaction)
                Swal.fire({
                    icon: 'success',
                    text: 'transaction cancelled'
                })
            }
        })
    }

    renderSuccessfulTransaction = () => {
        return (
            <div className=" pl-3 mt-4">
                <div className="pl-3 font-weight-bold" >
                    Transaction history.
                            </div>
                {/* <p className="pl-3 text-muted">
                    Transaction history.
                </p> */}
                {/* {this.renderPendingTransactions()} */}
            </div>
        )
    }

    renderPendingTransactions = () => {
        const { data } = this.props
        if (data) {
            return data.map((val, id) => {
                // { this.countTotaltransactionPrice(val.price) }
                return (
                    <div className="d-flex justify-content-center pb-3 pr-3 ">
                        <div style={{ width: "100%" }} className="pendingtransaction-card">
                            {/* src={API_URL + val.imagepath} */}
                            <MDBCardHeader >
                                <a className="text-muted">tranasaction {id + 1} of {this.props.data.length}</a>
                            </MDBCardHeader>
                            <div className="text-center mt-3">
                                {/* <span className="float-left ml-4">
                                </span> */}
                                <small className="text-muted">Transaction ID </small>
                                <span className="font-weight-bold" style={{ fontSize: '2.5vh', color: '#5c5c5c' }}>
                                    {val.idtransaction}
                                </span>
                            </div>
                            <MDBCardBody>
                                <div className="d-flex justify-content-between">
                                    <div class="d-flex flex-column bd-highlight mb-3">
                                        {/* <div class="pb-1 bd-highlight">Flex item 1</div>
                                        <div class="pb-1 bd-highlight">Flex item 2</div>
                                        <div class="pb-1 bd-highlight">Flex item 3</div> */}
                                        {this.printSubTotal(id)} items
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        Rp {parseInt(val.totalprice).toLocaleString()}
                                    </div>
                                </div>
                                <div className="font-weight-bold text-center">
                                    BANK CENTRAL ASIA (BCA)
                                                    <br />
                                                        2521098408
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    <br />
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center text-muted">{moment(val.transactiontime).format('DD MMMM YYYY,  h:mm:ss a')}</div>
                                    <div >
                                        <MDBBtn size="md" color="blue darken-4">Confirm Payment</MDBBtn>
                                        <MDBBtn onClick={() => this.onBtnCancel(this.props.id, val.idtransaction)} outline size="md" color="blue darken-4">cancel</MDBBtn>
                                    </div>
                                </div>
                            </MDBCardFooter>
                        </div>
                    </div>
                )
            })
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
                        <div className="text-center " style={{ fontSize: '20px' }}>Transactions
                        </div>
                        <div className="text-right">
                            <MDBBtn size="sm" outline color="grey" >
                                <HistoryIcon /> history
                            </MDBBtn>
                        </div>
                        {
                            this.props.data.length <= 0
                                ?
                                this.renderSuccessfulTransaction()
                                :
                                <div>
                                    <div className="pendingtransaction pl-3 pt-5 mt-4">
                                        <div className="pl-3 font-weight-bold" >
                                            pending transaction
                                            </div>
                                        <p className="pl-3 text-muted">You have transaction that has not been confirmed. If you have transfered, please click confirm. If you want to cancel this transaction, click "cancel".</p>
                                        {this.renderPendingTransactions()}
                                    </div>
                                    <div className="mt-5">
                                        {this.renderSuccessfulTransaction()}
                                    </div>
                                </div>
                        }
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ user, transaction }) => {
    // console.log('', transaction)
    return {
        ...user,
        ...transaction
    }
}

export default connect(mapStateToProps, { getUserTransaction, deleteUserTransaction })(UserTransction);