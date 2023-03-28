import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Header,
  Homepage,
  News,
  Donatenow,
  Shelters,
  Footer,
} from "./components";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Header />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Healthcare" element={<News />} />
              <Route path="/Donatenow" element={<Donatenow />} />
              <Route path="/Shelters" element={<Shelters />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <h1 className="text-center text-decoration-underline m-5">
        SIGN UP FOR EMAIL UPDATES
      </h1>
      <div className="mail">
        <Row className="m-5 ">
          <Form className="w-50">
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form>

          <Form.Group className="mb-3 w-50 " controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="recieve regular updates" />
          </Form.Group>
          <Button
            variant="primary"
            className="btn w-50 button"
            type="submit"
          >
            Submit
          </Button>
        </Row>
      </div>
      <div className="footer">
        <Footer />

        {/* <Typography.Title level={5} style={{ color: 'black', textAlign: 'center' }}>Copyright © 2021 
          <Link to="/">
             Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space> */}
      </div>
    </div>
  );
};

export default App;
