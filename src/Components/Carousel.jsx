import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

const EcommercePage = () => {
    return (
        <section className="text-center  my-5 sizecardcarousel container">
            {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
                Our bestsellers
      </h2> */}
            {/* <p className="grey-text text-center w-responsive mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p> */}
            <MDBCarousel
                activeItem={1}
                length={3}
                slide={true}
                showControls={true}
                showIndicators={true}
                multiItem
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBRow>
                            <MDBCol md="4">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYKjTdsdmxrzK2rHigESO3xtaqwSZq8tCMeU44--jFdK2hDZ93"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>UPS</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Sentinel Power</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://images-na.ssl-images-amazon.com/images/I/71exyYT0XzL._SX522_.jpg"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Battery</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">NP12-150</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN9xCa56i2vzoIwer1pLwGAH6vkBUy7_GT4XXajcCKt0k9Uc1Y"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>UPS</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Master HE</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBRow>
                            <MDBCol md="4">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg"
                                        alt="sample photo"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Shoes</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Leather boots</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg"
                                        alt="sample photo"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Jeans</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Slim jeans</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg"
                                        alt="sample photo"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Shorts</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Denim shorts</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBRow>
                            <MDBCol md="4">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg"
                                        alt="sample photo"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Shoes</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Leather boots</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg"
                                        alt="sample photo"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Jeans</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Slim jeans</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg"
                                        alt="sample photo"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Shorts</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Denim shorts</a>
                                            </strong>
                                        </MDBCardTitle>
                                        {/* <MDBCardText>
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor
                                            sit amet, consectetur, adipisci.
                                        </MDBCardText> */}
                                        {/* <MDBCardFooter className="px-1">
                                            <span className="float-left">49$</span>
                                            <span className="float-right">
                                                <MDBTooltip
                                                    placement="top"
                                                    tag="a"
                                                    component="i"
                                                    componentClass="fa fa-eye grey-text ml-3"
                                                    tooltipContent="Quick look"
                                                />
                                                <MDBTooltip
                                                    placement="top"
                                                    tag="a"
                                                    component="i"
                                                    componentClass="fa fa-heart grey-text ml-3"
                                                    tooltipContent="Add to watchlist"
                                                />
                                            </span>
                                        </MDBCardFooter> */}
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </section>
    );
}

export default EcommercePage;