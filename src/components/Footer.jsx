import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center ftr bg-dark ftr text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className=" ftr me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="ftr">
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className=" ftr text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className=" ftr text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Street2Shelter does not provide direct services such as housing
                or case management. If you are homeless or at risk of becoming
                homeless, please contact your local 2-1-1 hotline or learn about
                other resources on our How to Get Help page.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a
                  href="http://www.ihrn.org.in/"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  IHRN
                </a>
              </p>
              <p>
                <a
                  href="https://www.hlrn.org.in/homelessness"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  HLRN
                </a>
              </p>
              <p>
                <a
                  href="https://www.homelesspeople.in/"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  Homeless
                </a>
              </p>
              <p>
                <a
                  href="https://borgenproject.org/tag/homelessness-in-india/"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  borgenproject
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" target="_blank" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" target="_blank" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" target="_blank" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" target="_blank" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Street2Shelter.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
