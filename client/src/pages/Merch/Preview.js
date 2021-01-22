import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol, MDBRow } from "mdbreact";

const MerchPreview = () => {
  return (
    <MDBContainer>
      <MDBRow style={{display: "flex", justifyContent: "center"}}>
        <MDBCol md="8">
          <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="/merch/merch_front.jpeg"
                    alt="Merch Front"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="/merch/merch_back.jpeg"
                    alt="Merch Back"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{display: "flex", justifyContent: "center"}}>
        <MDBCol md="8">
          <p style={{fontWeight: "bold", fontSize: "18px"}}>
            Rs. 500 + Rs. 60 Delivery Charges (anywhere in India)
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MerchPreview;