import React from "react";
import "./Homepage.css";
import Carousel from "react-bootstrap/Carousel";
import { Divider } from "antd";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Homepage = () => {
  // const { data, error, isLoading } = useGetLocationsQuery();
  // console.log(data);
  return (
    <div>
      <Divider></Divider>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-80"
            src="https://images.unsplash.com/photo-1529520161780-2573a0926b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Proposed Budgets for homelessness are too low</h3>
            <p>Reach out to your authorities by march 29</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-80"
            src="https://images.unsplash.com/photo-1616693371303-fa858d997d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Proposed Budgets for homelessness are too low</h3>
            <p>Reach out to your authorities by march 29</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-80"
            src="https://plus.unsplash.com/premium_photo-1678304859064-1c3901469f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Proposed Budgets for homelessness are too low</h3>
            <p>Reach out to your authorities by march 29</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Divider></Divider>
      <div>
        <h1 className="text-center text-decoration-underline mb-5">
          OUR MISSION
        </h1>
        <h5 className="text-center pb-5 mb-5">
          Homelessness is a complex issue affecting millions worldwide, with
          factors including affordable housing, poverty, mental illness, and
          addiction. Public services struggle to offer aid due to complexity.
          Effective solutions are vital, involving collaboration between
          stakeholders such as governments, non-profits, and the private sector.
        </h5>
      </div>
      <h2 className="text-center">TOP SHELTERS IN HYDERABAD</h2>

      <Card className="text-center m-5">
        <Card.Header>Health Homeless Shelters Meals</Card.Header>
        <Card.Body>
          <Card.Title>Good Samaritans India Old Age Home</Card.Title>
          <a href="http://maps.apple.com/?q=17.500532,78.49435">
            <Card.Text className="m-3 text-decoration-none">
              Address : 1-6-46/182, R&B Defence Colony,, Venkatapuram Road,
              Kistamma Enclave, Alwal, Secunderabad, Hyderabad, Telangana 500067
            </Card.Text>
          </a>
          <a href="http://www.goodsamaritansindia.in/">
            <Button variant="primary">Website</Button>
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <Card className="text-center m-5">
        <Card.Header>
          {" "}
          Education Women's Shelters Health Childcare Domestic Violence Clothing
          Emergency Shelters
        </Card.Header>
        <Card.Body>
          <Card.Title>Sannihita center</Card.Title>
          <a href="http://maps.apple.com/?q=17.441016,78.461834">
            <Card.Text className="m-3 text-decoration-none">
              Address : Noorani Manzil, Door No. 125/2RT, Street No.5,
              Secunderabad, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016
            </Card.Text>
          </a>
          <a href="http://sannihita.org.in/">
            <Button variant="primary">Website</Button>
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <Card className="text-center m-5">
        <Card.Header>
          {" "}
          Childcare Education Health Meals Homeless Shelters
        </Card.Header>
        <Card.Body>
          <Card.Title>Rainbow Foundation India</Card.Title>
          <a href="http://maps.apple.com/?q=17.414464,78.489848">
            <Card.Text className="m-3 text-decoration-none">
              Address : 1-1-711/C/1, 1st Floor, Opp. Vishnu Residency,
              Gandhinagar, Hyderabad, Telangana 500080
            </Card.Text>
          </a>
          <a href="http://rainbowhome.in/">
            <Button variant="primary">Website</Button>
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <Card className="text-center m-5">
        <Card.Header> Health Women's Shelters Education</Card.Header>
        <Card.Body>
          <Card.Title>SAATHII</Card.Title>
          <a href="http://maps.apple.com/?q=17.415102,78.494461">
            <Card.Text className="m-3 text-decoration-none">
              Address : 10, Vigneswar Enclave, Bakaram, Kavadiguda,
              Secunderabad, Telangana 500080
            </Card.Text>
          </a>
          <a href="http://www.saathii.org/">
            <Button variant="primary">Website</Button>
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <Card className="text-center m-5">
        <Card.Header>
          {" "}
          Health Childcare Substance Abuse Women's Shelters
        </Card.Header>
        <Card.Body>
          <Card.Title>Hyderabad Council of Human Welfare.</Card.Title>
          <a href="http://maps.apple.com/?q=17.500532,78.49435">
            <Card.Text className="m-3 text-decoration-none">
              Address : #12-2-790/56, Ayodhya Nagar Colony Mehdipatnam,
              Hyderabad - 500028 Andhra Pradesh, INDIA
            </Card.Text>
          </a>
          <a href="http://www.hchw.in/">
            <Button variant="primary">Website</Button>
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Row xs={1} md={2} className="g-4 px-5 mx-5">
        <Col>
          <Card>
            {/* <Card.Title>Assessment Tools</Card.Title> */}
            <Card.Img
              className="clsimg"
              variant="top"
              src="https://blog.mettl.com/wp-content/uploads/2020/05/Blog20Hackathon_2_1200x620-08-16.jpg"
            />
            <Card.Body>
              <Card.Text>
                <button className=" crd">
                  <a
                    className="crd"
                    href="https://endhomelessness.org/resource/next-generation-assessment-tools-series/"
                  >
                    Assessment tools
                  </a>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Title>Assessment Tools</Card.Title> */}
            <Card.Img
              className="clsimg"
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3WmyFCufVcXXOgxWZAii_ztgwDdUwilIDw&usqp=CAU"
            />
            <Card.Body>
              <Card.Text>
                <button className=" crd">
                  <a
                    className="crd"
                    href="https://endhomelessness.org/resources-overview/"
                  >
                    Tool kit
                  </a>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 p-5 mx-5">
        <Col>
          <Card>
            {/* <Card.Title>Assessment Tools</Card.Title> */}
            <Card.Img
              className="clsimg"
              variant="top"
              src="data:image/png;base64,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"
            />
            <Card.Body>
              <Card.Text>
                <button className=" crd">
                  <a
                    className="crd"
                    href="https://endhomelessness.org/resources-overview/"
                  >
                    view all
                  </a>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Title>Assessment Tools</Card.Title> */}
            <Card.Img
              className="clsimg"
              variant="top"
              src="data:image/png;base64,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"
            />
            <Card.Body>
              <Card.Text>
                <button className=" crd">
                  <a className="crd" href="https://endhomelessness.org/blog/">
                    view all
                  </a>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
