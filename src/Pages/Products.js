import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Components/Header'
import NavBarMenu from '../Components/NavBarmenu';
import Axios from 'axios';
import { API_URL } from '../support/API_URL';
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

    renderData = () => {
        return this.state.data.map((val, index) => {
            return (
                <MDBCol lg="3 mt-5">
                    <Link to={`/ProductDetail?id=${val.id}`}>
                        <div class="card">
                            <div class="">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap" />
                                {/* <a>
                            <div class="mask rgba-white-slight"></div>
                        </a> */}
                            </div>

                            {/* <a class="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3"><i
                                class="fas fa-chevron-right pl-1"></i></a> */}

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

                            {/* <div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
                                <ul class="list-unstyled list-inline font-small">
                                    <li class="list-inline-item pr-2 white-text"><i class="far fa-clock pr-1"></i>05/10/2015</li>
                                    <li class="list-inline-item pr-2"><a href="#" class="white-text"><i
                                        class="far fa-comments pr-1"></i>12</a></li>
                                    <li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1">
                                    </i>21</a></li>
                                    <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </Link>
                </MDBCol>

                //  <div class="col mb-4">
                //      {/* <Link to={`/reservation?id=${this.state.data[0].id}`}> */}
                //      <Link to={`/ProductDetail?id=${val.id}`}>
                //          <div class="card h-100">
                //              <div class="view overlay">
                //                 <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                //                     alt="Card image cap" />
                //             </div>
                //             <div class="card-body product-listitem">
                //                 <p class="card-text">
                //                     {val.categoryid == 1
                //                         ?
                //                         "UPS"
                //                         :
                //                         "Battery"
                //                     }
                //                 </p>
                //                 <p class="card-title">
                //                     {val.name}
                //                 </p>
                //             </div>
                //         </div>
                //     </Link>
                // </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <NavBarMenu />
                <div className="body">
                    {/* <div className="container"> */}
                    {/* <div class="p-5"> */}
                    <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example p-5">
                        <div className="row row-cols-md-4">
                            {this.renderData()}
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
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

export default Produts;