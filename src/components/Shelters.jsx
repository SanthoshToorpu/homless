import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Divider } from 'antd'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

const Shelters = () => {
    
    const [data,setData] =useState([])
    const getJobs = () => {
      axios.get("http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=f71809d3&app_key=ace8016857316e568a56333762a1f268&results_per_page=20&what=javascript%20developer&what_exclude=java&where=london&sort_by=salary&salary_min=30000&full_time=1&permanent=1&content-type=application/json")
      .then((response) =>{
          console.log(response)
        //   setData(response.data.articles)
      } )
  }
    
  return (
    <div>
        <Divider></Divider>
        <Divider></Divider>
        <Button onClick={getJobs}>Fetch Jobs</Button>
        <div>
            <h1 className='text-center text-decoration-underline'>JOBS AND TRAININGS</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis consectetur voluptas iste sit quam quo commodi, est eveniet aliquid hic cumque numquam mollitia deserunt, modi non aut tenetur nam! Qui ipsum esse quis consequuntur doloremque suscipit nihil fuga veritatis soluta quisquam dicta, corrupti voluptas molestiae, odio commodi magni culpa.</p>
        </div>
        <div className="container">
          <div className="row">
            {
              data.map((value) => {
                return(
                  <Card className="text-center">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                );
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Shelters