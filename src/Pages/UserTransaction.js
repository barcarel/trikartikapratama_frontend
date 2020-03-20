import React, { Component } from 'react';
import { connect } from 'react-redux'
import SideNavigation from '../Components/SideNavigation'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { getUserTransaction } from '../redux/action'
import HistoryIcon from '@material-ui/icons/History';
import { API_URL } from "../support/API_URL";
import { MDBBtn, MDBCard, MDBCardHeader, MDBCardTitle, MDBCardBody, MDBFooter, MDBCardFooter } from 'mdbreact';

class UserTransction extends Component {

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

    renderPendingTransactions = () => {
        if (this.props.data) {
            return this.props.data.map((val, id) => {
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
                                        <div class="pb-1 bd-highlight">Flex item 1</div>
                                        <div class="pb-1 bd-highlight">Flex item 2</div>
                                        <div class="pb-1 bd-highlight">Flex item 3</div>
                                    </div>
                                    <div>
                                        2
                                    </div>
                                    <div>
                                        3
                                    </div>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <div className="text-right">
                                    <MDBBtn size="md" color="blue darken-4">Confirm Payment</MDBBtn>
                                    <MDBBtn outline size="md" color="blue darken-4">cancel</MDBBtn>
                                </div>
                            </MDBCardFooter>
                            {/* <div className="row"> */}
                            {/* <div className="p-5">
                                        <MDBInput label="" type="checkbox" id="checkbox1" />
                                        <MDBBtn onClick={() => this.onClickRemoveProduct(this.props.id, val.idproduct)} size="sm" color="danger"><DeleteForeverIcon /></MDBBtn>
                                    </div> */}
                            {/* <div className="col-4">
                                        <img src={API_URL + val.imagepath} width="100%" />
                                    </div> */}
                            {/* <div className="col-auto d-flex justify-content-center"> */}
                            {/* <span style={{fontWeight: 'bold'}}> */}
                            {/* </span> */}
                            {/* <br /> */}
                            {/* <div> */}
                            {/* {val.productqty} pcs x  {val.price.toLocaleString()}
                                        <br /> */}
                            {/* </div> */}
                            {/* <div> */}
                            {/* Rp {val.totalprice.toLocaleString()} */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* <MDBCardTitle>{val.name}</MDBCardTitle> */}
                            {/* <MDBCardText>
                                    {val.productqty} pcs
                                </MDBCardText> */}
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
                        <div className="pendingtransaction pl-3 pt-3">
                            <div className="pl-3 font-weight-bold" >
                                pending transaction
                            </div>
                            <p className="pl-3 text-muted">You have pending transaction. If you have transfered, please click on "confirm payment". </p>
                            {this.renderPendingTransactions()}
                        </div>
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

export default connect(mapStateToProps, { getUserTransaction })(UserTransction);