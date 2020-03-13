import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, Button, Input } from "mdbreact";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import { Form, FormGroup, Container } from 'reactstrap'
import { MDBNavLink } from 'mdbreact'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Jumbotron } from 'reactstrap';

const FooterPage = () => {
    return (
        <div>
            <div className="above-footer">
                <div className="container p-3">
                    <div className="d-flex align-items-center" >
                        <div className="mr-auto ml-auto">
                            <h4>We understand your needs and provide the best solution. </h4>
                        </div>
                        <div className="col-4">
                            <Button color="success" style={{ width: "20vh" }}>
                                <WhatsAppIcon />
                                &nbsp;
                                CONTACT US
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Jumbotron className="above-footer">
                <h3 className="display-5 text-center">
                    <span className="d-none d-lg-inline">
                    We understand your needs and provide the best solution.
                    </span>
                        <span style={{ marginLeft: "5vh" }}>
                        <Button color="success" style={{ width: "20vh" }}>
                            <WhatsAppIcon style={{ marginBottom: "1%" }} />
                            &nbsp;
                            TALK TO US
                        </Button>
                    </span>
                </h3>
            </Jumbotron> */}

            <MDBFooter className="font-small pt-5 footer">
                <MDBContainer fluid className="text-center">
                    <div className="pb-3">
                        <img className="img-fluid" src={require('../img/logo/logo_tkp_final.png')} alt="header-logo" style={{ width: "60vh", maxWidth: "100%", height: "auto" }} />
                        <div className="m-4">
                            <img className="img-fluid mr-5" src={require('../img/logo/logo_riello.png')} alt="header-logo" style={{ width: "60vh", maxWidth: "20vh", height: "auto" }} />
                            <img className="img-fluid" src={require('../img/logo/panasoniclogo.png')} alt="header-logo" style={{ width: "60vh", maxWidth: "20vh", height: "auto" }} />

                        </div>
                        <div className="mt-5 mb-5">
                            <h5 style={{ fontWeight: "bold" }}>PT. TRI KARTIKA PRATAMA</h5>
                            <div style={{ opacity: "0.8" }}>
                                Ruko Mediterania blok A-19 <br />Jakarta, Indonesia <br />14240
                            <br />
                                Phone: (021) 4522164
                            <br />
                                Whatsapp: +62 812 9156 0711
                            <br />
                                Email: pt.trikartika@hotmail.com
                            </div>
                        </div>
                    </div>
                    <MDBRow>
                        <MDBCol>
                            <h5 className="title">SUPPORT</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <MailOutlineOutlinedIcon style={{ fontSize: 27, color: "#B23833", opacity: "0.8" }} />
                                    <div className="footer-left"> pt.trikartika@hotmail.com </div>
                                </li>
                                <li className="list-unstyled">
                                    <CallOutlinedIcon style={{ fontSize: 20, color: "#B23833", opacity: "0.8" }} />
                                    <div className="footer-left"> (021) 4522164 </div>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol>
                            <h5 className="title">LINKS</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <MDBNavLink to='/' className="footer-text">HOME</MDBNavLink>
                                </li>
                                <li className="list-unstyled">
                                    <MDBNavLink to='/products' className="footer-text">PRODUCTS</MDBNavLink>
                                </li>
                                <li className="list-unstyled">
                                    <MDBNavLink to='/about' className="footer-text">ABOUT</MDBNavLink>
                                </li>
                                <li className="list-unstyled">
                                    <MDBNavLink to='/contactus' className="footer-text">CONTACT</MDBNavLink>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol>
                            <h5 className="title">PRODUCTS</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <MDBNavLink to='/' className="footer-text">UPS</MDBNavLink>
                                </li>
                                <li className="list-unstyled">
                                    <MDBNavLink to='/' className="footer-text">BATTERY</MDBNavLink>
                                </li>
                                {/* <li className="list-unstyled">
                                    <MDBNavLink to='/'>STABILIZER</MDBNavLink>
                                </li> */}
                            </ul>
                        </MDBCol>
                        {/* <MDBCol md="3">
                            <h5 className="title">NEWSLETTER</h5>
                            <ul>
                                <div className="subscribe-desc">
                                    Subscribe to our newsletter and get 10% off your first purchase!
                                </div> < br />
                                <Form>
                                    <FormGroup>
                                        <Input type="email" name="email" placeholder="johngreen@yahoo.com" />
                                    </FormGroup>
                                </Form>
                                <div><Button color="danger">SUBSCRIBE</Button></div>
                            </ul>
                        </MDBCol> */}
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3" style={{backgroundColor: '#B23833'}}>
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.trikartikapratama.com"> www.trikartikapratama.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default FooterPage;