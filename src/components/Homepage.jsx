import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Divider } from 'antd';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Homepage = () => {
  // const { data, error, isLoading } = useGetLocationsQuery();
  // console.log(data);
  return (
    <div>
      <Divider></Divider>
    <Carousel fade >
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
      <h1 className='text-center text-decoration-underline mb-5'>OUR MISSION</h1>
      <h5 className="text-center pb-5 mb-5">Homelessness is a complex issue affecting millions worldwide, with factors including affordable housing, poverty, mental illness, and addiction. Public services struggle to offer aid due to complexity. Effective solutions are vital, involving collaboration between stakeholders such as governments, non-profits, and the private sector.</h5>
    </div>
    <h2 className='text-center'>TOP SHELTERS IN HYDERABAD</h2>
    
      <Card className="text-center m-5">
      <Card.Header>Health Homeless Shelters Meals</Card.Header>
      <Card.Body>
        <Card.Title>Good Samaritans India Old Age Home</Card.Title>
        <a href="http://maps.apple.com/?q=17.500532,78.49435">
        <Card.Text className="m-3 text-decoration-none">
          Address : 1-6-46/182, R&B Defence Colony,, Venkatapuram Road, Kistamma Enclave, Alwal, Secunderabad, Hyderabad, Telangana 500067
        </Card.Text>
        </a>
        <a href="http://www.goodsamaritansindia.in/">
        <Button variant="primary">Website</Button>
        </a>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <Card className="text-center m-5">
      <Card.Header> Education   Women's Shelters   Health   Childcare   Domestic Violence   Clothing   Emergency Shelters</Card.Header>
      <Card.Body>
        <Card.Title>Sannihita center</Card.Title>
        <a href="http://maps.apple.com/?q=17.441016,78.461834">
        <Card.Text className="m-3 text-decoration-none">
          Address : Noorani Manzil, Door No. 125/2RT, Street No.5, Secunderabad, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016
        </Card.Text>
        </a>
        <a href="http://sannihita.org.in/">
        <Button variant="primary">Website</Button>
        </a>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <Card className="text-center m-5">
      <Card.Header> Childcare   Education   Health   Meals   Homeless Shelters</Card.Header>
      <Card.Body>
        <Card.Title>Rainbow Foundation India</Card.Title>
        <a href="http://maps.apple.com/?q=17.414464,78.489848">
        <Card.Text className="m-3 text-decoration-none">
          Address :  1-1-711/C/1, 1st Floor, Opp. Vishnu Residency, Gandhinagar, Hyderabad, Telangana 500080
        </Card.Text>
        </a>
        <a href="http://rainbowhome.in/">
        <Button variant="primary">Website</Button>
        </a>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <Card className="text-center m-5">
      <Card.Header> Health   Women's Shelters   Education</Card.Header>
      <Card.Body>
        <Card.Title>SAATHII</Card.Title>
        <a href="http://maps.apple.com/?q=17.415102,78.494461">
        <Card.Text className="m-3 text-decoration-none">
          Address : 10, Vigneswar Enclave, Bakaram, Kavadiguda, Secunderabad, Telangana 500080
        </Card.Text>
        </a>
        <a href="http://www.saathii.org/">
        <Button variant="primary">Website</Button>
        </a>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <Card className="text-center m-5">
      <Card.Header> Health   Childcare   Substance Abuse   Women's Shelters</Card.Header>
      <Card.Body>
        <Card.Title>Hyderabad Council of Human Welfare.</Card.Title>
        <a href="http://maps.apple.com/?q=17.500532,78.49435">
        <Card.Text className="m-3 text-decoration-none">
          Address : #12-2-790/56, Ayodhya Nagar Colony Mehdipatnam, Hyderabad - 500028 Andhra Pradesh, INDIA
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
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    <Row xs={1} md={2} className="g-4 p-5 mx-5">
    <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>




    
    </div>
  )
}

export default Homepage