import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GetAppIcon from '@material-ui/icons/GetApp';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar';
import Axios from 'axios';
import { API_URL } from '../support/API_URL'
import Footer from '../Components/Footer'
import { connect } from 'react-redux';
import { createPdfFromHtml } from "../Downloader/logic";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBInput } from 'mdbreact';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { addToCart, getUserCart, updateProductQty } from '../redux/action'


class ProductDetail extends Component {

    state = {
        data: [
            {}
        ],
        productqty: 0,
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        var id = this.props.location.search.split('=')[1]
        Axios.get(API_URL + `/products/getOneProduct?id=${id}`)
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => console.log(err))
    }

    handleClick = () => {
        createPdfFromHtml(this.printContent);
    };

    onClickMinus = () => {
        if (this.state.productqty != 0) {
            this.setState({ productqty: this.state.productqty - 1 })
        }
    }

    onClickPlus = () => {
        this.setState({ productqty: this.state.productqty + 1 })
    }

    onClickAddtoCart = () => {
        var iduser = this.props.id
        var idproduct = this.state.data[0].id
        var productqty = this.state.productqty
        var totalprice = productqty * this.state.data[0].price
        console.log('total price', totalprice)
        if (productqty != 0) {
            var cartUser = this.props.cart.data
            var totalqty = productqty
            var updatetotalprice = totalprice
            for (var i = 0; i < cartUser.length; i++) {
                if (idproduct == cartUser[i].idproduct) {
                    totalqty += cartUser[i].productqty
                    updatetotalprice += cartUser[i].totalprice
                    return this.props.updateProductQty(iduser, idproduct, totalqty, updatetotalprice)
                }
            }
            this.props.addToCart(iduser, idproduct, productqty, totalprice)
        }
    }

    printPrice = () => {
        var price = this.state.data[0].price
        price = parseInt(price)

        return price.toLocaleString()
    }

    render() {
        return (
            <div>
                <MDBModal size="lg" isOpen={this.state.modal} toggle={this.toggle} centered>
                    {/* <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader> */}
                    <MDBModalBody>
                        <img className="img-fluid" src={API_URL + this.state.data[0].specification} />
                    </MDBModalBody>
                    {/* <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter> */}
                </MDBModal>
                {/* {console.log(this.state.data)} */}
                <Header />
                <MenuNavBar />
                <div>
                    <div className="container">
                        <div style={{ marginTop: "5%" }}>
                            <Link to='/products'>
                                <ArrowBackIcon />
                                &nbsp;
                        <span className="d-none d-md-inline">
                                    back to products
                        </span>
                            </Link>
                            <div className="float-right" style={{ color: "#4382C7" }}>
                                {/* <a href={'../img/products/ups/SentinelPowerSPT/sentinelpower.jpg'} type="application/jpg" target="_blank" download> */}
                                {/* <a href="../img/products/specification_sentinelpower.png" download > */}
                                {/* <div onClick={this.handleClick}> */}
                                <GetAppIcon style={{ border: "1px solid", borderRadius: "100%" }} />
                                &nbsp;
                                    download pdf
                                    {/* </div> */}
                                {/* </a> */}
                            </div>
                        </div>
                        <h1 className="display-5 text-center mb-5" >{this.state.data[0].name}</h1>
                        <div className="d-flex justify-content-center">
                            <div>
                                <img className="card-img-top" style={{ maxWidth: "63vh" }} src={API_URL + this.state.data[0].imagepath} />
                                <div className="text-justify mt-3 mb-5" style={{ opacity: "0.8" }}>
                                    {this.state.data[0].description}
                                </div>
                            </div>
                            <br />
                            <div className="text-center">
                                <h5 className="mb-3">Specifications</h5>
                                <MDBCol>
                                    <MDBCard style={{ width: "22rem" }}>
                                        <div onClick={this.toggle}>
                                            <MDBCardImage className="img-fluid" src={API_URL + this.state.data[0].specification} waves />
                                        </div>
                                    </MDBCard>
                                </MDBCol>
                                <div className="m-5">
                                    Rp {this.printPrice()}
                                </div>
                                {this.props.role == 'user'
                                    ?
                                    <div>
                                        <div className="d-flex justify-content-around mt-4">
                                            <div className="align-self-center">
                                                <MDBBtn outline color="" size="sm" onClick={this.onClickMinus}>
                                                    <RemoveIcon />
                                                </MDBBtn>
                                            </div>
                                            <div className="text-center align-self-center">
                                                {this.state.productqty}
                                            </div>
                                            <div className="align-self-center">
                                                <MDBBtn outline color="" size="sm" onClick={this.onClickPlus}>
                                                    <AddIcon />
                                                </MDBBtn>
                                            </div>
                                        </div>
                                        <MDBBtn color="red darken-4" onClick={this.onClickAddtoCart}>add to cart</MDBBtn>
                                    </div>
                                    :
                                    <>
                                    </>
                                }
                            </div>
                        </div>
                    </div>s
                    <br />
                    <br />
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ user, cart }) => {
    return {
        ...user,
        cart
    }
}



export default connect(mapStateToProps, { addToCart, getUserCart, updateProductQty })(ProductDetail);