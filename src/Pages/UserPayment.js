import React, { Component } from 'react';
import Header from '../Components/Header'
import MenuNavBar from '../Components/MenuNavBar'
import Footer from '../Components/Footer'
import { connect } from 'react-redux'
import { getUserCart, postUserTransaction } from '../redux/action'
import { API_URL } from "../support/API_URL";
import Swal from 'sweetalert2'
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'

class UserPayment extends Component {

    state = {
        selectedBank: 1,
        provincevalidator: 'required',
        addressvalidator: 'required',
        cityvalidator: 'required',
        fullnamevalidator: '',
        phonenovalidator: ''
    }

    componentDidMount() {
        if (this.props.firstname || this.props.lastname) {
            this.setState({ fullnamevalidator: '' })
        } else {
            this.setState({ fullnamevalidator: 'required' })
        }
        if (this.props.phoneno) {
            this.setState({ phonenovalidator: '' })
        } else {
            this.setState({ phonenovalidator: 'required' })
        }
    }

    renderDataCart = () => {
        if (this.props.cart.data) {
            return this.props.cart.data.map((val, id) => {
                // { this.countTotalCartPrice(val.price) }
                return (
                    <div className="p-3">
                        <MDBCard style={{ width: "100%" }}>
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

    onBtnConfirm = () => {
        var fullname = this.fullName.value
        var phoneno = this.phoneNumber.value
        var address = this.address.value
        var province = this.province.value
        var city = this.city.value
        var bank = this.state.selectedBank
        var totalprice = this.props.cart.data.totalPrice

        if (bank == 1) {
            bank = "Bank Central Asia (BCA)"
        } else if (bank == 2) {
            bank = "BANK MANDIRI"
        } else if (bank == 3) {
            bank = "BANK RAKYAT INDONESIA (BRI)"
        } else if (bank == 4) {
            bank = "BANK DANAMON"
        }

        var idproduct = ''
        var productqty = ''
        var productname = ''
        this.props.cart.data.map((item) => {
            var temp = item.idproduct.toString()
            idproduct += temp + ','
            var temp2 = item.productqty
            productqty += temp2 + ','
            var temp3 = item.name
            productname += temp3 + ','
        })
        // console.log(idproduct)

        if (fullname && phoneno && address && province && city) {
            if (this.refs.note.value) {
                var note = this.refs.note.value
                // console.log(this.props.id, this.props.cart.data.)
                this.props.postUserTransaction(this.props.id, idproduct, fullname, phoneno, address, province, city, note, bank, totalprice, productqty, productname)
                Swal.fire({
                    icon: 'success',
                    text: 'Payment submitted.'
                })
            } else {
                var note = 'empty note'
                this.props.postUserTransaction(this.props.id, idproduct, fullname, phoneno, address, province, city, note, bank, totalprice, productqty, productname)
                Swal.fire({
                    icon: 'success',
                    text: 'Payment submitted.'
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                text: 'complete all required fields',
                showConfirmButton: true,
                timer: '1200'
            })
        }
    }

    onChangeSelectBank = (e) => {
        this.setState({ selectedBank: parseInt(e.target.value) })
    }

    onInputFullname = (e) => {
        var inputfullname = e.target.value
        if (inputfullname.length <= 0) {
            this.setState({ fullnamevalidator: 'required' })
        } else {
            this.setState({ fullnamevalidator: '' })
        }
    }

    onInputPhoneno = (e) => {
        var inputphoneno = e.target.value
        if (inputphoneno.length <= 0) {
            this.setState({ phonenovalidator: 'required' })
        } else {
            this.setState({ phonenovalidator: '' })
        }
    }

    onInputProvince = (e) => {
        var inputprovince = e.target.value
        if (inputprovince.length <= 0) {
            this.setState({ provincevalidator: 'required' })
        } else {
            this.setState({ provincevalidator: '' })
        }
    }

    onInputAddress = (e) => {
        var inputaddress = e.target.value
        if (inputaddress.length <= 0) {
            // console.log('pertama',this.state.inputaddress.length + 1)
            this.setState({ addressvalidator: 'required' })
        } else {
            // console.log(this.state.inputaddress.length)
            this.setState({ addressvalidator: '' })
        }
    }

    onInputCity = (e) => {
        var inputcity = e.target.value
        if (inputcity.length <= 0) {
            this.setState({ cityvalidator: 'required' })
        } else {
            this.setState({ cityvalidator: '' })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <MenuNavBar />
                <div className="body">
                    <div className="container">
                        <div className="text-center pt-5">
                            <h4>Complete your payment</h4>
                        </div>
                        <div className="pt-5" style={{ marginLeft: '10vh' }}>
                            <div className="row">
                                <div className="col-6 deliveryinformation">
                                    <div className="pt-3">Delivery Information</div>
                                    <MDBInput label="Full Name" onChange={this.onInputFullname} valueDefault={this.props.firstname + ' ' + this.props.lastname} inputRef={(fullName) => this.fullName = fullName} />
                                    <p id="fullname" style={{ color: 'red', marginTop: '-2vh', marginBottom: '4vh' }}>{this.state.fullnamevalidator}</p>

                                    <MDBInput label="Phone Number" onChange={this.onInputPhoneno} type="number" valueDefault={this.props.phoneno} inputRef={(phoneNumber) => this.phoneNumber = phoneNumber} />
                                    <p id="phoneno" style={{ color: 'red', marginTop: '-2vh', marginBottom: '4vh' }}>{this.state.phonenovalidator}</p>

                                    <MDBInput label="Address" onChange={this.onInputAddress} inputRef={(address) => this.address = address} />
                                    <p id="address" style={{ color: 'red', marginTop: '-2vh', marginBottom: '4vh' }}>{this.state.addressvalidator}</p>

                                    <MDBInput label="Province" onChange={this.onInputProvince} inputRef={(province) => this.province = province} />
                                    <p id="province" style={{ color: 'red', marginTop: '-2vh', marginBottom: '4vh' }}>{this.state.provincevalidator}</p>

                                    <MDBInput label="City" onChange={this.onInputCity} inputRef={(city) => this.city = city} />
                                    <p id="city" style={{ color: 'red', marginTop: '-2vh', marginBottom: '4vh' }}>{this.state.cityvalidator}</p>

                                    <div className="text-muted">
                                        Note
                                    </div>
                                    <textarea placeholder="Please call before making the delivery." ref="note" rows="5" style={{ width: '100%' }} />
                                    {/* <div className="text-right">
                                        <MDBBtn color="primary" onClick={this.onBtnSave}>Save</MDBBtn>
                                    </div> */}
                                </div>
                                <div className="col-5 ml-5 p-3 ordersummary" style={{ height: '55vh' }}>
                                    <div className="mb-4">Payment Information</div>
                                    {/* <MDBInput label="" inputRef={(fullName) => this.fullName = fullName} /> */}
                                    <div className="ml-1 font-weight-bold">
                                        TRANSFER TO
                                        <select
                                            className="form-control form-control-sm"
                                            value={this.state.selectedBank}
                                            onChange={this.onChangeSelectBank}
                                        >
                                            {/* <option value={0}>SELECT BANK</option> */}
                                            <option value={1}>BANK CENTRAL ASIA (BCA)</option>
                                            <option value={2}>BANK MANDIRI</option>
                                            <option value={3}>BANK RAKYAT INDONESIA (BRI)</option>
                                            <option value={4}>BANK DANAMON</option>
                                        </select>
                                    </div>
                                    <div className="text-center mt-4 mb-4">
                                        {
                                            this.state.selectedBank == 1
                                                ?
                                                <div>
                                                    <div className="font-weight-bold text-center">
                                                        BANK CENTRAL ASIA (BCA)
                                                    <br />
                                                        2521098408
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    <br />
                                                    </div>
                                                </div>
                                                :
                                                this.state.selectedBank == 2
                                                    ?
                                                    <div>
                                                        <div className="font-weight-bold text-center">
                                                            BANK MANDIRI
                                                <br />
                                                            2362927392
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                    </div>
                                                    :
                                                    this.state.selectedBank == 3
                                                        ?
                                                        <div>
                                                            <div className="font-weight-bold text-center">
                                                                BANK RAKYAT INDONESIA (BRI)
                                                <br />
                                                            192745198000
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                        </div>
                                                        :
                                                        this.state.selectedBank == 4
                                                            ?
                                                            <div>
                                                                <div className="font-weight-bold text-center">
                                                                    BANK DANAMON
                                                <br />
                                                            2710800881
                                                    <br />
                                                    PT. TRI KARTIKA PRATAMA
                                                    </div>
                                                            </div>
                                                            :
                                                            <>
                                                            </>
                                        }
                                    </div>
                                    <div classname="">*Payment can only be done via bank transfer. Thank you.</div>
                                    <hr className="style1" />
                                    <div className="ml-2 mt-2 text-center font-weight-bold">
                                        Order Summary
                                    </div>
                                    <div className="ml-2 mt-4">
                                        Subtotal ({this.props.cart.data.length} items)
                                    <span className="float-right">Rp {parseInt(this.props.cart.data.totalPrice).toLocaleString()}</span>
                                    </div>
                                    <div className="ml-2 mt-3 ">
                                        Delivery Fee
                                    <span className="float-right">
                                            FREE
                                        </span>
                                        <hr className="style1" />
                                        {
                                            this.state.fullnamevalidator.length <= 0 && this.state.addressvalidator.length <= 0 && this.state.cityvalidator.length <= 0 && this.state.cityvalidator.length <= 0
                                                ?
                                                <MDBBtn onClick={this.onBtnConfirm} color="red darken-4">CONFIRM ORDER</MDBBtn>
                                                :
                                                <MDBBtn disabled color="red darken-4">CONFIRM ORDER</MDBBtn>

                                        }
                                    </div>
                                </div>
                                {/* {this.renderDataCart()} */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ user, cart, transaction }) => {
    // console.log(transaction)
    // console.log(cart)
    return {
        ...user,
        cart,
        transaction
    }
}

export default connect(mapStateToProps, { getUserCart, postUserTransaction })(UserPayment);