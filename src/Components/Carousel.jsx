import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

const EcommercePage = () => {
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
                                        src="https://www.riello-ups.com/uploads/file/851/1851/linkedin_SDU_6000_Tower_front_2_LR.jpg"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>UPS</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Sentinel Dual SDU</a>
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
                            <MDBCol md="4" className="clearfix d-none d-md-block">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src="https://www.riello-ups.com/uploads/file/534/1534/linkedin_GAMMA_MST_30-200_con_125_LR.jpg"
                                        alt="sample photo"
                                        className="cardimage"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>UPS</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Multi Sentry MST</a>
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
                                        src="https://www.riello-ups.com/uploads/file/514/1514/linkedin_MHT300-400_Closed_DX_B_OK.jpg"
                                        alt="sample photo"
                                        style={{height: '30vh'}}
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>UPS</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Master HP</a>
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
                                        src="https://5.imimg.com/data5/LS/HS/BZ/SELLER-37504443/riello-master-mps-40-kva-ups-500x500.jpg"
                                        alt="sample photo"
                                        style={{height: '30vh'}}
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5>UPS</h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!" className="mdbcardtitle">Master MPS</a>
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

export default EcommercePage;