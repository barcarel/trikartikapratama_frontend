import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { keepLogin, getUserCart } from './redux/action'

import Landingpage from './Pages/landingpage'
import NavbarMenu from './Components/NavBarmenu'
import Footer from './Components/Footer'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Notfound from './Pages/404notfound';
import Admin from './Pages/AdminLogin';
import AdminHomepage from './Pages/AdminHomepage';
import AdminProducts from './Pages/AdminProducts';
import AdminUserControl from './Pages/AdminUserControl';
import BeforeAdminHomepage from './Pages/BeforeAdminHomepage';
import Register from './Pages/Register';
import UserLogin from './Pages/UserLogin';
import UserProfile from './Pages/UserProfile';
import UserAccount from './Pages/UserAccount';
import UserCheckout from './Pages/UserCheckout';
import UserTransaction from './Pages/UserTransaction';
import AdminTransactionPanel from './Pages/AdminTransactionPanel'
import UserPayment from './Pages/UserPayment';
import print from './Downloader/print';

class App extends Component {

  componentDidMount() {
    this.props.keepLogin()
    this.props.getUserCart(this.props.id)
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Landingpage} exact />
          <Route path='/about' component={About} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/products' component={Products} />
          <Route path='/register' component={Register} />
          <Route path='/userlogin' component={UserLogin} />
          <Route path='/productdetail' component={ProductDetail} />
          <Route path='/adminlogin' component={Admin} />
          <Route path='/print' component={print} />
          {this.props.role == 'admin'
            ?
            <div>
              <Route path='/adminhomepage' component={AdminHomepage} />
              <Route path='/admincontrolroom' component={BeforeAdminHomepage} />
              <Route path='/adminusercontrol' component={AdminUserControl} />
              <Route path='/admintransactionpanel' component={AdminTransactionPanel} />
            </div>
            :
            this.props.role == 'user'
              ?
              <>
                <Route path='/userprofile' component={UserProfile} />
                <Route path='/useraccount' component={UserAccount} />
                <Route path='/usertransaction' component={UserTransaction} />
                <Route path='/userpayment' component={UserPayment} />
                <Route path='/usercheckout' component={UserCheckout} />
              </>
              :
              <Route path='*' component={Notfound} />
          }
          <Route path='/adminproducts' component={AdminProducts} />
          <Route path='*' component={Notfound} />
        </Switch>
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

export default connect(mapStateToProps, { keepLogin, getUserCart })(App);
