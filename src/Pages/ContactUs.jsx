import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap'
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { API_URL } from '../support/API_URL'
import Footer from '../Components/Footer'

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitMessage = () => {
        var fullname = this.refs.fullname.value
        var email = this.refs.email.value
        var contactno = this.refs.contactno.value
        var message = this.refs.message.value

        // console.log(fullname + email + contactno + message)
        var obj = {
            fullname: fullname,
            email: email,
            contactno: contactno,
            message: message
        }

        if(fullname && email && contactno){
            try{
                Axios.post(API_URL + ``)
            } catch(err) {console.log(err) }
        }

        Swal.fire({
            icon: 'success',
            title: 'Sent!',
            text: 'We will reach you as soon as possible.',
            timer: 5000
          })
    }

    render() {
        return (
            <div>
                <Header />
                <NavBarMenu />
                <div className="body">
                    <h1 style={{ textAlign: "center", fontSize: "45px", paddingTop: "3%", fontWeight: "bolder" }}>Get in touch</h1>
                    <hr className="style1" />
                    <h3 style={{ textAlign: "center", fontSize: "20px", opacity: "0.8" }}>We'd love to hear from you.</h3>
                    <h3 style={{ textAlign: "center", fontSize: "15px", opacity: "0.5" }}>We want to make sure you get the best product and services when it comes to UPS. Feel free to say hello!</h3>
                    <br />
                    <div className="container">
                        <div class="d-flex justify-content-around companyprofile-left">
                            <div class="col-6">
                                <div className="container-fluid">
                                    <form>
                                        <div className="form-group">
                                            <label for="fullname" style={{ opacity: "0.9" }}>Full Name (required)</label>
                                            <input type="text" className="form-control" id="fullname" ref="fullname"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="email" style={{ opacity: "0.9" }}>Email (required)</label>
                                            <input type="email" className="form-control" id="email" ref="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="contactno" style={{ opacity: "0.9" }}>Contact Number (required)</label>
                                            <input type="contactno" className="form-control" id="contactno" ref="contactno"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="message" style={{ opacity: "0.9" }}>Message</label>
                                            <textarea class="form-control" id="message" rows="5" ref="message">
                                                Hi! Let's work together!
                                        </textarea>
                                        </div>
                                        <button type="button" class="btn btn-danger" onClick={this.submitMessage}>Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="align-self-start d-none d-lg-block">
                                <div className="container-fluid">
                                    <div class="d-flex flex-column">
                                        <div class="p-2">
                                            <div class="d-flex justify-content-start">
                                                <div>
                                                    <LocationOnTwoToneIcon style={{ fontSize: 40 }} className="menu-icon" />
                                                </div>
                                                <div>
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                        </div>
                                                <div>
                                                    Ruko Mediterania blok A-19 <br />Jakarta, Indonesia <br />14240
                                        </div>
                                            </div>
                                        </div>
                                        <div class="p-2">
                                            <div class="d-flex justify-content-start">
                                                <div>
                                                    <CallTwoToneIcon style={{ fontSize: 40 }} className="menu-icon" />
                                                </div>
                                                <div>
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                        </div>
                                                <div className="align-self-center">
                                                    (021) 4522164
                                        </div>
                                            </div>
                                        </div>
                                        <div class="p-2">
                                            <div class="d-flex justify-content-start">
                                                <div>
                                                    <EmailTwoToneIcon style={{ fontSize: 40 }} className="menu-icon" />
                                                </div>
                                                <div>
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                </div>
                                                {/* <div style={{display: "inline"}}> */}
                                                pt.trikartika@yahoo.com
                                            {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactUs;