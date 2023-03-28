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
      <Divider></Divider>

      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col">
                <a href={value.redirect_url}>
                <Card>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text className="text-dark">
                      Salary Range: {value.salary_min} - {value.salary_max}
                    </Card.Text>
                    <Card.Text className="text-dark">
                      Contract Type: {value.contract_type}
                    </Card.Text>
                    <Card.Text>
                      Location: {value.location.display_name} 
                    </Card.Text>
                    <Button variant="primary">Apply Now</Button>
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