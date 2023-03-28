import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
const Header = () => {
  return (
    <Container fluid>
    <Navbar className='navbar navbar navbar-expand-md navbar-light width bg-primary fixed-top'>
      <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1884/1884201.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Street2Shelter
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Healthcare">News</Nav.Link>
            <Nav.Link href="/Shelters">Shelters</Nav.Link>
            
            <NavDropdown title="HOMELESSNESS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://endhomelessness.org/homelessness-in-america/what-causes-homelessness/">What Causes Homelessnes ?</NavDropdown.Item>
              <NavDropdown.Item href="https://endhomelessness.org/homelessness-in-america/who-experiences-homelessness/">
                Who Experiences Homelessness ?
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://endhomelessness.org/ending-homelessness/solutions/">
                What Can you Do?
              </NavDropdown.Item>
              <NavDropdown.Item href="/Donatenow">
                DONATE NOW
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    </Container>

  );
}

export default Header