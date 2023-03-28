import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from "@auth0/auth0-react";

import './header.css'
const Header = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Container fluid>
    <Navbar className='navbar navbar navbar-expand-md width navbar-dark bg-dark fixed-top'>
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
            <Nav.Link href="/Shelters">Job Trainings</Nav.Link>
            
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
          {
            isAuthenticated && (
              <Navbar.Brand href="/">
                      <img
                        alt=""
                        src={user.picture}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                      />{' '}
                      {user.name}
                    </Navbar.Brand>
              
            )
          }
          
          <Form className="d-flex">                 
            {isAuthenticated?(
                 <Button className="btn btn-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                 Log Out
               </Button>
            ):
            <Button onClick={() => loginWithRedirect()}>Log In</Button>
            }
                       
          </Form>
        </Navbar.Collapse>
    </Navbar>
    </Container>

  );
}

export default Header