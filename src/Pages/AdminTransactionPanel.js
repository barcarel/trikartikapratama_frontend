import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'
import { MDBCardHeader, MDBCardBody, MDBCardFooter, MDBBtn } from 'mdbreact'
import moment from 'moment'
import { API_URL } from '../support/API_URL';
import { getProductDetail } from '../redux/action'

class AdminTransactionPanel extends Component {

    state = {
        data: [],
        productdetail: []
    }

    componentDidMount() {
        this.getAllTransactions()
        // this.getProducts(localStorage.getItem('idproduct'))
    }


    getAllTransactions = () => {
        Axios.get(API_URL + '/cart/getAllUserTransaction')
            .then((res) => {
                // console.log('adsasd', res.data)
                this.setState({ data: res.data })
            })
            .catch((err) => console.log(err))
    }

    getProducts = (idproduct) => {
        // console.log(idproduct)
        var products = idproduct.split(',') // "2,7,3,2,"
        var coma = products.pop()

        // console.log(products)

        var array = []
        for (var i = 0; i < products.length; i++) {
            // if (i % 2 == 0) {
            // this.state.productdetail.push(products.charAt(i))
            // this.props.getProductDetail(i)
            // console.log(products.charAt(i))
            this.props.getProductDetail(products[i])
            // this.state.productdetail.push(this.props)
            array.push(this.props.name)
            // }
        }
        // array.map((val, id) => {
        //     return(
        //         val.
        //     )
        // })
        // console.log('state productdetail',this.state.productdetail)
    }

    // setStorage = (idproduct) => {
    //     return localStorage.setItem('idproduct', idproduct)
    // }

    renderData = () => {
        // if(this.state.data)
        return this.state.data.map((val, id) => {
            return (
                <div style={{ width: "100%" }} className="pendingtransaction-card mt-5">
                    <MDBCardHeader color="blue darken-3" style={{ color: 'white' }}>
                        transaction date: {moment(val.transactiontime).format('DD MMMM YYYY,  h:mm:ss a')}
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
                                    <div className="text-muted"> Total price:</div>
                                </div>
                                <div className="col-auto">
                                    {/* {this.setStorage(val.idproduct)} */}
                                    {this.getProducts(val.idproduct)}
                                    <br />
                               Rp {parseInt(val.totalprice).toLocaleString()}
                                </div>
                            </div>
                            <div>
                                <MDBBtn size="md" color="blue darken-4">Confirm Payment</MDBBtn>
                                <MDBBtn outline size="md" color="blue darken-4">cancel</MDBBtn>
                            </div>
                        </div>
                        {/* <div className="font-weight-bold text-center">
                            BANK CENTRAL ASIA (BCA)
                                                    <br />
                                                        2521098408
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    <br />
                        </div> */}
                    </MDBCardBody>
                    {/* <MDBCardFooter>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center text-muted"></div>
                            <div >
                                <MDBBtn size="md" color="blue darken-4">Confirm Payment</MDBBtn>
                                <MDBBtn onClick={() => this.onBtnCancel(this.props.id, val.idtransaction)} outline size="md" color="blue darken-4">cancel</MDBBtn>
                            </div>
                        </div>
                    </MDBCardFooter> */}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="mt-5 mb-4">
                    <h3>Pending Transactions</h3>
                    <div>
                        {this.renderData()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ allproducts, product }) => {
    // console.log(product)
    return {
        ...allproducts,
        ...product
    }
}

export default connect(mapStateToProps, { getProductDetail })(AdminTransactionPanel);