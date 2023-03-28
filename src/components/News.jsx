import React,{useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Divider } from 'antd';

const News = () => {

  const [data,setData] =useState([])
  const getNews = () => {
      axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=a4b73ccf8bf6400d87f3302dc66aa554")
      .then((response) =>{
          console.log(response)
          setData(response.data.articles)
      } )
  }

  return (
    <div>
      <Divider></Divider>
      <Button onClick={getNews}>Fetch News</Button>

      <div className="container">
        <div className="row">
          {
            data.map((value) => {
              return(
                <div className="col">
                  <a href={value.url}>
                  <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.urlToImage} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>
                    {value.description}
                  </Card.Text>
                  <Button variant="primary">Reach</Button>
                </Card.Body>
              </Card>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default News