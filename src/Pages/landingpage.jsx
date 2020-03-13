import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from '../Components/Jumbotron';
import Carousel from '../Components/Carousel';
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu';
import Footer from '../Components/Footer'

class landingpage extends Component {



    toggle() {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    render() {
        return (
            <div>
                <Header />
                <NavBarMenu />
                <div className="body">
                    <Jumbotron />
                    <div className="latest-products">
                        <h3>Latest Products</h3>
                        <Carousel />
                    </div>
                    <hr className="style2" />
                    <div className="featured-products">
                        <br />
                        <br />
                        <h3>Featured Products</h3>
                        <Carousel />
                    </div>
                    <hr className="style1" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container about-company">
                        <div className="d-flex justify-content-between">
                            <div className="col-5 d-none d-lg-block">
                                <img src={require('../img/websiteimg/abtcompany.jpg')} alt="img-abtcompany" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                            </div>
                            <div className="col-1 d-none d-lg-block">
                            </div>
                            <div>
                                <h2>About the Company</h2>
                                <hr className="style2" />
                                <p style={{ wordSpacing: '6px', padding: '1vh' }}>
                                    <b>PT. Tri Kartika Pratama </b> adalah perusahaan yang bergerak dalam bidang penjualan Uninterrupted Power Supply atau UPS. Telah berdiri lebih dari 20 tahun, tepatnya pada tahun 1998, pengalaman usaha bisnis kami tidak dapat diragukan lagi.
                                    Kami memiliki tim teknisi yang handal dan berpengalaman di lapangan. Produk yang kami sediakan merupakan produk dengan kualitas terbaik dikelasnya dengan harga yang terjangkau. Kami mengedepankan profesionalisme dalam seluruh elemen bisnis yang kami lakukan.
                                </p>
                            </div>
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

const mapStateToProps = () => {

}

export default landingpage;