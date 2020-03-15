import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GetAppIcon from '@material-ui/icons/GetApp';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar';
import Axios from 'axios';
import { API_URL } from '../support/API_URL'
import Footer from '../Components/Footer'
import { connect } from 'react-redux';
import { createPdfFromHtml } from "../Downloader/logic";

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {}
            ]
        }
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

    render() {
        return (
            <div>
                {/* {console.log(this.state.data)} */}
                <Header />
                <MenuNavBar />
                <div style={{ paddingBottom: "2%" }}>
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
                        <div className="productdetail text-center">
                            <h1 className="display-5" >{this.state.data[0].name}</h1>
                            <img className="card-img-top" style={{ maxWidth: "63vh" }} src={require('../img/products/ups/SentinelPowerSPT/sentinelpower.jpg')} />
                            <div className="text-justify mt-3 mb-5" style={{ opacity: "0.8" }}>
                            {this.state.data[0].description}
                            </div>
                        </div>
                        <h5>Specifications</h5>
                        <br />
                        <div className="text-center">
                            <img className="card-img-top" style={{ maxWidth: "80%" }} src={require('../img/products/ups/SentinelPowerSPT/specification_sentinelpower.png')} />
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                <Footer />
            </div>
        );
    }
}



export default ProductDetail;