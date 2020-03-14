import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { keepLogin } from './redux/action'

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
import Register from './Pages/Register';
import UserLogin from './Pages/UserLogin';
import UserProfile from './Pages/UserProfile';

class App extends Component {

  componentDidMount() {
    this.props.keepLogin()
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
          {this.props.role == 'admin'
            ?
            <Route path='/adminhomepage' component={AdminHomepage} />
            :
            <div>
              <Route path='/userprofile' component={UserProfile} />
              <Route path='*' component={Notfound} />
            </div>
          }
          <Route path='/adminproducts' component={AdminProducts} />
          <Route path='*' component={Notfound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    ...user
  }
}

export default connect(mapStateToProps, { keepLogin })(App);
