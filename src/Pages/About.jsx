import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu';
import Footer from '../Components/Footer'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <NavBarMenu />
                <div className="body">
                    <Jumbotron className="jumbotron-companyprofile">
                        <h2 className="display-5">Company Profile</h2>
                    </Jumbotron>
                    <br />
                    <br />
                    <div className="about-company">
                        <div className="container">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h1 style={{ textAlign: "center" }}>PT. Tri Kartika Pratama</h1>
                                    <br />
                                    <hr className="style2" />
                                    <br />
                                    <p>
                                        <b>PT. Tri Kartika Pratama </b> adalah perusahaan yang bergerak dalam bidang penjualan Uninterrupted Power Supply atau UPS. Telah berdiri lebih dari 20 tahun, tepatnya pada tahun 1998, pengalaman usaha bisnis kami tidak dapat diragukan lagi.
                                    Kami memiliki tim teknisi yang handal dan berpengalaman di lapangan. Produk yang kami sediakan merupakan produk dengan kualitas terbaik dikelasnya dengan harga yang terjangkau. Kami mengedepankan profesionalisme dalam seluruh elemen bisnis yang kami lakukan.
                                    <br />
                                        <br />
                                        <b>PT. Tri Kartika Pratama </b> merupakan pilihan yang tepat bagi Anda jika Anda mencari produk yang berkualitas tinggi dengan pelayanan customer service yang hangat dan ramah untuk memberikan pengalaman transaksi yang aman dan terpercaya.
                                        <br /><br />
                                        <br /><br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div class="d-flex">
                                <div >
                                    <h2 style={{ textAlign: "center" }}>Our Vision</h2>
                                    <hr className="style2" />
                                    <p>
                                        Menjadikan <b>PT. Trikartika Pratama</b> sebagai perusahaan yang tetap menjadi pilihan utama para konsumen serta menjunjung tinggi Integritas, Kejujuran, dan Profesionalisme agar menjadi perusahaan yang mampu memberikan Service yang terbaik untuk semua konsumen.
                                        </p>
                                </div>
                                <div className="col-md-6 align-self-center d-none d-lg-block" style={{ textAlign: "right" }}>
                                    <img src={require('../img/websiteimg/companyvision.jpg')} alt="img-abtcompany" style={{ width: "50vh" }} />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="container">
                            <div class="d-flex">
                                <div className="col-md-6 align-self-center d-none d-lg-block">
                                    <img src={require('../img/websiteimg/companymission.jpg')} alt="img-abtcompany" style={{ width: "50vh" }} />
                                </div>
                                <div>
                                    <h2 style={{ textAlign: "center" }}>Our Mission</h2>
                                    <hr className="style2" />
                                    <p>
                                        Menjamin bahwa setiap produk yang <b>PT. Trikartika Pratama </b> tawarkan memiliki kualitas terbaik, memberikan pelayanan yang ramah dan terpercaya bagi para konsumen, serta membangun Kepercayaan dan Integritas perusahaan melalui pembinaan hubungan yang baik dengan konsumen.
                                    </p>
                                </div>
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

export default About;