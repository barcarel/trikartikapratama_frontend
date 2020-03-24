import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar';
import Axios from 'axios';
import { API_URL } from '../support/API_URL';
import { getProductDetail } from '../redux/action'
import Footer from '../Components/Footer'
import { MDBCol, MDBContainer, MDBBtn, MDBTabContent, MDBTabPane } from 'mdbreact'

class Produts extends Component {

    state = {
        activeItem: "1",
        data: []
    }

    toggle = (tab) => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            })
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        Axios.get(API_URL + '/products/getAllProducts')
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => console.log(err))
    }

    onCardPress = (id) => {
        this.props.getProductDetail(id)
    }


    renderData = () => {
        return this.state.data.map((val, index) => {
            return (
                <MDBCol lg="3 mt-5">
                    <Link to={`/ProductDetail?id=${val.id}`}>
                        <div class="card" onClick={this.onCardPress(val.id)}>
                            <img style={{ objectFit: true }} height="300px" class="card-img-top" src={API_URL + val.imagepath} alt="Card image cap" />
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                            <div class="card-body text-center">
                                <h5 class="card-title">{val.name}</h5>
                                <hr />
                                <p class="card-text">
                                    {val.categoryid == 1
                                        ?
                                        "UPS"
                                        :
                                        "Battery"
                                    }
                                </p>
                            </div>
                        </div>
                    </Link>
                </MDBCol>
            )
        })
    }

    renderDataUPS = () => {
        return this.state.data.map((val, index) => {
            if (val.categoryid == 1) {
                return (
                    <MDBCol lg="3 mt-5">
                        <Link to={`/ProductDetail?id=${val.id}`}>
                            <div class="card" onClick={this.onCardPress(val.id)}>
                                <img style={{ objectFit: true }} height="300px" class="card-img-top" src={API_URL + val.imagepath} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                                <div class="card-body text-center">
                                    <h5 class="card-title">{val.name}</h5>
                                    <hr />
                                    <p class="card-text">
                                        {val.categoryid == 1
                                            ?
                                            "UPS"
                                            :
                                            "Battery"
                                        }
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </MDBCol>
                )
            }
        })
    }

    renderDataBattery = () => {
        return this.state.data.map((val, index) => {
            if (val.categoryid == 2) {
                return (
                    <MDBCol lg="3 mt-5">
                        <Link to={`/ProductDetail?id=${val.id}`}>
                            <div class="card" onClick={this.onCardPress(val.id)}>
                                <img style={{ objectFit: true }} height="300px" class="card-img-top" src={API_URL + val.imagepath} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                                <div class="card-body text-center">
                                    <h5 class="card-title">{val.name}</h5>
                                    <hr />
                                    <p class="card-text">
                                        {val.categoryid == 1
                                            ?
                                            "UPS"
                                            :
                                            "Battery"
                                        }
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </MDBCol>
                )
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <div className="body">
                    <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example p-5">
                        <div className="text-center"><h3>Products</h3></div>
                        {/* <MDBContainer> */}
                        <div className="text-center mt-5">
                            <MDBBtn outline color="blue darken-4" active={this.state.activeItem === "1"} onClick={() => this.toggle("1")} role="tab" >All products</MDBBtn>
                            <MDBBtn outline color="green darken-4" active={this.state.activeItem === "2"} onClick={() => this.toggle("2")} role="tab" >UPS</MDBBtn>
                            <MDBBtn outline color="red darken-4" active={this.state.activeItem === "3"} onClick={() => this.toggle("3")} role="tab" >Battery</MDBBtn>
                        </div>
                        <MDBTabContent activeItem={this.state.activeItem} >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <div className="row">
                                    {this.renderData()}
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" role="tabpanel">
                                <div className="row">
                                    {this.renderDataUPS()}
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" role="tabpanel">
                                <div className="row">
                                    {this.renderDataBattery()}
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                        {/* </MDBContainer> */}
                        {/* <div className="row">
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

// Battery:
// - NP55-12 (SE)
// - NP24-12
// - NP17-12
// - NP12-150
// - NP12-120
// - NP12-100AH
// - NP12-65
// - NP12-45
// - NP12-12

export default connect(null, { getProductDetail })(Produts);