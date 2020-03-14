// import React, { Component } from 'react';
// import Dropdown from './Dropdown';
// import { MDBNavLink, MDBNavItem, MDBBtn } from 'mdbreact';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { logout } from '../redux/action'
// import UserProfileDropdown from '../Components/UserProfileDropdown'
// import MenuNavBar from '../Components/MenuNavBar'


// class NavBarMenu extends Component {

//     state = {
//         menuChosen: "home"
//     }

//     onBtnLogOut = () => {
//         this.props.logout()
//     }


//     render() {
//         return (
//             <div>
//                 {/* <MenuNavBar /> */}
//                 {/* <nav className="navbar navbar-menu navbar-expand-lg shift">
//                     <div className="container">
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarCollapse">
//                             <ul className="navbar-nav mr-auto">

//                                 <li className="nav-item active mr-5" >
//                                     <Link to='/'>
//                                         <a className="nav-link nav-menu">Home
//                               <span className="sr-only">(current)</span>
//                                         </a>
//                                     </Link>
//                                 </li>

//                                 <li className="nav-item">
//                                     <Link to='/products'>
//                                         <a className="nav-link mr-5 nav-menu">Products
//                               <span className="sr-only">(current)</span>
//                                         </a>
//                                     </Link>
//                                 </li>

//                                 <li className="nav-item">
//                                     <Link to='/about'>
//                                         <a className="nav-link mr-5 nav-menu">About
//                               <span className="sr-only">(current)</span>
//                                         </a>
//                                     </Link>
//                                 </li>

//                                 <li className="nav-item">
//                                     <Link to='/contactus'>
//                                         <a className="nav-link mr-5 nav-menu">Contact
//                               <span className="sr-only">(current)</span>
//                                         </a>
//                                     </Link>
//                                 </li>

//                             </ul>
//                             <div>
//                                 {this.props.username
//                                     ?
//                                     <span style={{width: '20vh'}}>
//                                         <ShoppingCartIcon />
//                                         <UserProfileDropdown />
//                                     </span>
//                                     :
//                                     <div>
//                                         <Link to='/register'>
//                                             <MDBBtn className="user-register-btn" color="white">register</MDBBtn>
//                                         </Link>
//                                         <Link to='/userlogin'>
//                                             <MDBBtn color="indigo darken-4">login</MDBBtn>
//                                         </Link>
//                                     </div>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </nav> */}
//             </div>
//         )
//     }
// };

// const mapStateToProps = ({ user }) => {
//     return {
//         ...user
//     }
// }


// export default connect(mapStateToProps, { logout })(NavBarMenu);