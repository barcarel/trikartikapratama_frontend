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
        subtotalarray: 0,
        datapending: [],
    }

    componentDidUpdate() {
        if (this.props.id) {
            this.props.getUserTransaction(this.props.id)
            // this.renderProduct()
        }
    }

    printSubTotal = (id) => {
        var subtotal = this.props.data[id].productqty.length / 2
        return subtotal
    }

    onBtnCancel = (iduser, idtransaction) => {
        Swal.fire({
            title: 'Cancel transaction?',
            icon: 'error',
            text: 'You are about to cancel this transaction. Are you sure you want to cancel?',
            showCancelButton: true,
            cancelButtonText: 'no',
            confirmButtonText: 'yes, cancel',
            confirmButtonColor: '#D32F2F'
        }).then((result) => {
            if (result.value) {
                this.props.deleteUserTransaction(iduser, idtransaction)
            }
        })
    }

    renderSuccessfulTransaction = () => {
        const { data } = this.props
        if (data.length > 0) {
            return data.map((val, id) => {
                if (val.status != 'pending') {
                    return (
                        <div>
                            <div className="d-flex justify-content-center pb-3 pt-3 ">
                                <div style={{ width: "100%" }} className="generateboxshadow">
                                    {
                                        val.status == 'accepted'
                                            ?
                                            <MDBCardHeader color="green darken-3" style={{ color: 'white' }}>
                                                <small>{id + 1}. </small> Successful
                                            </MDBCardHeader>
                                            :
                                            <MDBCardHeader color="red darken-3" style={{ color: 'white' }}>
                                                <small>{id + 1}. </small>  Declined
                                            </MDBCardHeader>
                                    }
                                    <div className="text-center mt-3">
                                        <small className="text-muted">Transaction ID </small>
                                        <span className="font-weight-bold" style={{ fontSize: '2.5vh', color: '#5c5c5c' }}>
                                            {val.idtransaction}
                                        </span>
                                    </div>
                                    <MDBCardBody>
                                        <div className="d-flex justify-content-around">
                                            <div className="row">
                                                <div>
                                                    <div className="text-muted">Full Name:  </div>
                                                    <div className="text-muted">Phone Number:  </div>
                                                    <div className="text-muted"> Address: </div>
                                                    <div className="text-muted"> Province: </div>
                                                    <div className="text-muted"> City: </div>
                                                    <div className="text-muted"> Note: </div>
                                                </div>
                                                <div>
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
                                            <div>
                                                {
                                                    val.bank == 'Bank Central Asia (BCA)'
                                                        ?
                                                        <div>
                                                            <div className=" text-center">
                                                                TRANSFER TO:
                                                                <br />
                                                        BANK CENTRAL ASIA (BCA)
                                                    <br />
                                                        2521098408
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    <br />
                                                            </div>
                                                        </div>
                                                        :
                                                        val.bank == 'BANK MANDIRI'
                                                            ?
                                                            <div>
                                                                <div className=" text-center">
                                                                    TRANSFER TO:
                                                                <br />
                                                            BANK MANDIRI
                                                <br />
                                                            2362927392
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                            </div>
                                                            :
                                                            val.bank == 'BANK RAKYAT INDONESIA (BRI)'
                                                                ?
                                                                <div>
                                                                    <div className=" text-center">
                                                                        TRANSFER TO:
                                                                <br />
                                                                BANK RAKYAT INDONESIA (BRI)
                                                <br />
                                                            192745198000
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                                </div>
                                                                :
                                                                val.bank == 'BANK DANAMON'
                                                                    ?
                                                                    <div>
                                                                        <div className="text-center">
                                                                            TRANSFER TO:
                                                                <br />
                                                                BANK DANAMON
                                                <br />
                                                            2710800881
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                }
                                                <div className="text-center">
                                                    Rp {parseInt(val.totalprice).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>

                                    </MDBCardBody>
                                    <MDBCardFooter>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center text-muted">{moment(val.transactiontime).format('DD MMMM YYYY,  h:mm:ss a')}</div>
                                        </div>
                                    </MDBCardFooter>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    renderPendingTransactions = () => {
        const { data } = this.props
        if (data.length > 0) {
            return data.map((val, id) => {
                // { this.countTotaltransactionPrice(val.price) }
                if (val.status == 'pending') {
                    return (
                        <div className="pendingtransaction pl-3 pt-3 mt-4">
                            <div className="pl-3 font-weight-bold" >
                                pending transaction
                                            </div>
                            <p className="pl-3 pt-1 pr-3 text-muted text-justify">
                                You have transaction needs to be confirmed.
                                Please transfer the total amount to the account number below.
                                If you have done so, please wait. If you want to cancel this transaction, click on cancel transacton below.
                                </p>
                            <div className="d-flex justify-content-center pb-2 pt-3 ">
                                <div style={{ width: "100%" }} className="pendingtransaction-card mr-3">
                                    {/* src={API_URL + val.imagepath} */}
                                    {/* <MDBCardHeader >
                                        <a className="text-muted">tranasaction {id + 1} of {this.props.data.length}</a>
                                    </MDBCardHeader> */}
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
                                            {/* <h2>{val.bank}</h2> */}
                                            <div>
                                                {val.bank == 'Bank Central Asia (BCA)'
                                                    ?
                                                    <div>
                                                        <div className="font-weight-bold text-center">
                                                            TRANSFER TO:
                                                                <br />
                                                        BANK CENTRAL ASIA (BCA)
                                                    <br />
                                                        2521098408
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    <br />
                                                        </div>
                                                    </div>
                                                    :
                                                    val.bank == 'BANK MANDIRI'
                                                        ?
                                                        <div>
                                                            <div className="font-weight-bold text-center">
                                                                TRANSFER TO:
                                                        <br />
                                                    BANK MANDIRI
                                        <br />
                                                    2362927392
                                            <br />
                                            PT. TRI KARTIKA PRATAMA
                                            </div>
                                                        </div>
                                                        :
                                                        val.bank == 'BANK RAKYAT INDONESIA (BRI)'
                                                            ?
                                                            <div>
                                                                <div className="font-weight-bold text-center">
                                                                    TRANSFER TO:
                                                                <br />
                                                                BANK RAKYAT INDONESIA (BRI)
                                                <br />
                                                            192745198000
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                            </div>
                                                            :
                                                            val.bank == 'BANK DANAMON'
                                                                ?
                                                                <div>
                                                                    <div className="font-weight-bold text-center">
                                                                        TRANSFER TO:
                                                                <br />
                                                                BANK DANAMON
                                                <br />
                                                            2710800881
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                                </div>
                                                                :
                                                                <>
                                                                </>
                                                }
                                            </div>
                                            <div>
                                                Rp {parseInt(val.totalprice).toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="font-weight-bold text-center">
                                            {
                                                val.bank == 1
                                                    ?
                                                    <div>
                                                        <div className="font-weight-bold text-center">
                                                            BANK CENTRAL ASIA (BCA)
                                                    <br />
                                                        2521098408
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    <br />
                                                        </div>
                                                    </div>
                                                    :
                                                    val.bank == 2
                                                        ?
                                                        <div>
                                                            <div className="font-weight-bold text-center">
                                                                BANK MANDIRI
                                                <br />
                                                            2362927392
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                        </div>
                                                        :
                                                        val.bank == 3
                                                            ?
                                                            <div>
                                                                <div className="font-weight-bold text-center">
                                                                    BANK RAKYAT INDONESIA (BRI)
                                                <br />
                                                            192745198000
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                            </div>
                                                            :
                                                            val.bank == 4
                                                                ?
                                                                <div>
                                                                    <div className="font-weight-bold text-center">
                                                                        BANK DANAMON
                                                <br />
                                                            2710800881
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                                </div>
                                                                :
                                                                <>
                                                                </>
                                            }
                                        </div>
                                    </MDBCardBody>
                                    <MDBCardFooter>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center text-muted">{moment(val.transactiontime).format('DD MMMM YYYY,  h:mm:ss a')}</div>
                                            <div >
                                                {/* <MDBBtn size="md" color="blue darken-4">Confirm Payment</MDBBtn> */}
                                                <MDBBtn onClick={() => this.onBtnCancel(this.props.id, val.idtransaction)} size="md" color="red darken-4">cancel TRANSACTION</MDBBtn>
                                            </div>
                                        </div>
                                    </MDBCardFooter>
                                </div>
                            </div>
                        </div>
                    )
                }
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
                        {
                            this.props.data.length <= 0
                                ?
                                <div>
                                    <div className="pl-3 pt-4 font-weight-bold" >
                                        Transaction history
                                    </div>
                                    <p className="pl-3 text-muted">All transactions in the past. Green indicates successful transaction, red indicates transaction declined. </p>
                                    {this.renderSuccessfulTransaction()}
                                </div>
                                :
                                <div>
                                    {this.renderPendingTransactions()}
                                    <div className="pl-3 pt-4 font-weight-bold" >
                                        Transaction history
                                    </div>
                                    <p className="pl-3 text-muted">All transactions in the past. Green indicates successful transaction, red indicates transaction denied. </p>
                                    <div className="mt-1">
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