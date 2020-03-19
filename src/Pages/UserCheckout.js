import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserCart, deleteProductCart } from '../redux/action'
import { API_URL } from "../support/API_URL";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBNav, MDBRow, MDBInput, MDBLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBCardHeader,
} from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class UserCheckout extends Component {

    onClickRemoveProduct = (iduser, idproduct) => {
        // console.log(iduser, idproduct)
        this.props.deleteProductCart(iduser, idproduct)
        this.props.getUserCart()
    }

    renderDataCart = () => {
        if (this.props.cart.data) {
            return this.props.cart.data.map((val, id) => {
                // { this.countTotalCartPrice(val.price) }
                return (
                    <div className="d-flex justify-content-center p-3 ">
                        <MDBCard style={{ width: "40rem" }}>
                            {/* src={API_URL + val.imagepath} */}
                            <MDBCardHeader >
                                <a className="text-muted">order {id + 1} of {this.props.cart.data.length}</a>
                            </MDBCardHeader>
                            <MDBCardTitle className="mt-3">
                                {val.name}
                            </MDBCardTitle>
                            <MDBCardBody>
                                <div className="row">
                                    <div className="p-5">
                                        {/* <MDBInput label="" type="checkbox" id="checkbox1" /> */}
                                        <MDBBtn onClick={() => this.onClickRemoveProduct(this.props.id, val.idproduct)} size="sm" color="danger"><DeleteForeverIcon /></MDBBtn>
                                    </div>
                                    <div className="col-4">
                                        <img src={API_URL + val.imagepath} width="100%" />
                                    </div>
                                    <div className="col-auto d-flex justify-content-center">
                                        {/* <span style={{fontWeight: 'bold'}}> */}
                                        {/* </span> */}
                                        {/* <br /> */}
                                        {/* <div> */}
                                        {val.productqty} pcs x  {val.price.toLocaleString()}
                                        <br />
                                        {/* </div> */}
                                        {/* <div> */}
                                            Rp {val.totalprice.toLocaleString()}
                                        {/* </div> */}
                                    </div>
                                </div>
                                {/* <MDBCardTitle>{val.name}</MDBCardTitle> */}
                                {/* <MDBCardText>
                                    {val.productqty} pcs
                                </MDBCardText> */}
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
                            {/* <div>remove from cart</div> */}
                            <div>
                                {this.renderDataCart()}
                            </div>
                            {
                                this.props.cart.data.length > 0
                                    ?
                                    <Link to='/userpayment'>
                                        <MDBBtn color="primary">Proceed to payment</MDBBtn>
                                    </Link>
                                    :
                                    <MDBBtn disabled color="primary">Cart empty</MDBBtn>
                            }
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

export default connect(mapStateToProps, { getUserCart, deleteProductCart })(UserCheckout);