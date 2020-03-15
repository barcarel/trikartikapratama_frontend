import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import {connect} from 'react-redux'
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar';
import Axios from 'axios';
import { API_URL } from '../support/API_URL';
import {getProductDetail} from '../redux/action'
import Footer from '../Components/Footer'
import { MDBCol } from 'mdbreact'

class Produts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap" />
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

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <div className="body">
                    <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example p-5">
                        <div className="row row-cols-md-4">
                            {this.renderData()}
                        </div>
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

export default connect(null, {getProductDetail}) (Produts);