import React from 'react'
import {Button, Card} from 'react-bootstrap'
import boat from '../assets/boat.jpg';


export const Projects = (props) => (
  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={boat} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
)

