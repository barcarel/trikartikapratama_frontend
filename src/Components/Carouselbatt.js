import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

const Carouselbatt = () => {
    return (
        <section className="text-center  my-5 sizecardcarousel container">
            <MDBCarousel
                activeItem={1}
                length={2}
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
                                        src="https://www.thesafetycentre.co.uk/media/catalog/product/n/p/np55-12.jpg"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Battery</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">NP55-12</a>
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
                                        src="https://www.thesafetycentre.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/p/np100-12.jpg"
                                        alt="sample photo"
                                        style={{ height: '30vh' }}
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Battery</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">NP100-12</a>
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
                                        src="https://cpc.farnell.com/productimages/large/en_GB/BT00580-40.jpg"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Battery</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">NP17-12</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBRow>
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/4/12158837/12158837_946f3e66-a1a8-4b7c-bf25-c79ed7fb7b86_700_700"
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
                                <MDBCard narrow ecommerce className="mb-2" >
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://www.horme.com.sg/images/product/20171101170957PJNKV4KADFIFD_full.jpg"
                                        alt="sample photo"
                                        style={{ height: '30vh' }}
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Battery</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">NP12-120</a>
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
                                        src="https://images.tayna.com/prod-images/1200/Yuasa/yuasa-np24-12i.jpg"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>Battery</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">NP24-12</a>
                                            </strong>
                                        </MDBCardTitle>
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

export default Carouselbatt;