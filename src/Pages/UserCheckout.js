import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserCart } from '../redux/action'
import { API_URL } from "../support/API_URL";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBNav, MDBRow, MDBInput, MDBLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader,
} from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class UserCheckout extends Component {

    componentDidMount() {
        this.props.getUserCart()
    }

    renderDataCart = () => {
        if (this.props.cart.data) {
            return this.props.cart.data.map((val, id) => {
                // { this.countTotalCartPrice(val.price) }
                return (
                    <div className="d-flex justify-content-center p-3">
                        <MDBCard style={{ width: "50rem" }}>
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
                            <Link to='/userpayment'>
                                <MDBBtn color="primary">Proceed to payment</MDBBtn>
                            </Link>
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