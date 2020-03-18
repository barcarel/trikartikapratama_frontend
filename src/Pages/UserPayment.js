import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { connect } from 'react-redux'
import { getUserCart } from '../redux/action'
import { API_URL } from "../support/API_URL";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact'

class UserPayment extends Component {

    componentDidMount() {
        this.props.getUserCart()
    }

    renderDataCart = () => {
        if (this.props.cart.data) {
            return this.props.cart.data.map((val, id) => {
                // { this.countTotalCartPrice(val.price) }
                return (
                    <div className="p-3">
                        <MDBCard style={{ width: "100%" }}>
                            <MDBCardBody>
                                <MDBCardTitle>{val.name}</MDBCardTitle>
                                <MDBCardText>
                                    {val.productqty} pcs
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                )
            })
        }
    }

    onBtnSave = () => {
        // var fullname = this.fullName.value
        // console.log(fullname)
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <div className="body">
                    <div className="container">
                        <div className="text-center pt-5">
                            <h4>Complete your payment</h4>
                        </div>
                        <div className="pt-5" style={{ marginLeft: '10vh' }}>
                            <div className="row">
                                <div className="col-6 deliveryinformation">
                                    <div className="pt-3">Delivery Information</div>
                                    <MDBInput label="Full Name*" inputRef={(fullName) => this.fullName = fullName} />
                                    <MDBInput label="Phone Number*" type="number" inputRef={(phoneNumber) => this.phoneNumber = phoneNumber} />
                                    <MDBInput label="Address*" inputRef={(address) => this.address = address} />
                                    <MDBInput label="Province*" inputRef={(province) => this.province = province} />
                                    <MDBInput label="City*" inputRef={(city) => this.city = city} />
                                    <div className="text-muted">
                                        Note
                                    </div>
                                    <textarea placeholder="Please call before making the delivery." rows="5" style={{ width: '100%' }} />
                                    <div className="text-right">
                                        <MDBBtn color="primary" onClick={this.onBtnSave()}>Save</MDBBtn>
                                    </div>
                                </div>
                                <div className="col-5 ml-5 p-4 ordersummary" style={{ height: '25vh' }}>
                                    <div className="ml-2 text-center font-weight-bold">
                                        Order Summary
                                    </div>
                                    <div className="ml-2 mt-4">
                                        Subtotal (2 items)
                                    <span className="float-right">Rp 50,000,000</span>
                                    </div>
                                    <div className="ml-2 mt-3 ">
                                        Biaya pengiriman
                                    <span className="float-right">Rp 1,300,000</span>
                                        <hr className="style1" />
                                        <MDBBtn color="red darken-4">CONFIRM ORDER</MDBBtn>
                                    </div>
                                </div>
                                    {this.renderDataCart()}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    // console.log(cart)
    return {
        cart
    }
}

export default connect(mapStateToProps, { getUserCart })(UserPayment);