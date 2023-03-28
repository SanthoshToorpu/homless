import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Divider } from "antd";

const Shelters = () => {
  const [data, setData] = useState([]);
  const getJobs = () => {
    axios
      .get(
        "http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=f71809d3&app_key=ace8016857316e568a56333762a1f268&results_per_page=20&what=javascript%20developer&what_exclude=java&where=london&sort_by=salary&salary_min=30000&full_time=1&permanent=1&content-type=application/json"
      )
      .then((response) => {
        console.log(response);
        setData(response.data.results);
      });
  };

  return (
    <div>
      <Divider></Divider>
      <Divider></Divider>
      <Button onClick={getJobs}>Fetch Jobs</Button>

      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col">
                <a href="#">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                      <Card.Title>"#"</Card.Title>
                      <Card.Text>{value.title}</Card.Text>
                      <Button variant="primary">Reach</Button>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Shelters;
