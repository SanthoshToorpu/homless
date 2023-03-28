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
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body>
              <Card.Text>longer.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
