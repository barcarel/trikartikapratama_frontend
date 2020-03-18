import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { connect } from 'react-redux'
import { getUserCart } from '../redux/action'
import { API_URL } from "../support/API_URL";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBNav, MDBRow, MDBInput, MDBLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader,
} from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class UserCheckout extends Component {

    renderDataCart = () => {
        if (this.props.cart.data) {
            return this.props.cart.data.map((val, id) => {
                // { this.countTotalCartPrice(val.price) }
                return (
                    <MDBDropdownItem disabled>
                        <div className="row" style={{ width: '50vh' }}>
                            <div className="col-4">
                                <img style={{ objectFit: 'cover' }} width="100%" height="100%" src={API_URL + val.imagepath} />
                            </div>
                            <div className="col-8 d-flex align-items-center flex-column bd-highlight mb-3">
                                <div class="p-2 bd-highlight">
                                    {val.name}
                                </div>
                                <div class="p-2 bd-highlight">
                                    {/* <MDBBtn size="sm" color="red darken-4">-</MDBBtn> */}
                                    <span className="ml-3 mr-3">
                                        qty: {val.productqty}
                                    </span>
                                    {/* <MDBBtn size="sm" color="red darken-4">+</MDBBtn> */}
                                </div>
                                <div style={{ color: 'black' }}>
                                    Rp {parseInt((val.totalprice)).toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <MDBDropdownItem divider />
                    </MDBDropdownItem>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <div className="body">
                    <div className="container text-center">
                        <div className="pt-5">
                            <h4>Check out</h4>
                            <div>
                                {this.renderDataCart()}
                            </div>
                            <div className="d-flex justify-content-center">
                                {/* <MDBCol> */}
                                    {/* <MDBCard style={{ width: "50rem" }}>
                                        <MDBCardBody>
                                            <MDBCardTitle>Card title</MDBCardTitle>
                                            <MDBCardText>
                                                Some quick example text to build on the card title and make
                                                up the bulk of the card&apos;s content.
                                                </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard> */}
                                {/* </MDBCol> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ user, cart }) => {
    // console.log(cart)
    return {
        ...user,
        cart
    }
}

export default connect(mapStateToProps, { getUserCart })(UserCheckout);