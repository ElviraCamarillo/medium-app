import React, {Component} from  'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Header from '../../components/Header'

export default class Hola extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className="container-form">
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="string" placeholder="Title" />
            <Form.Label>Description:</Form.Label>
            <Form.Control type="string" placeholder="Abstrac Post" />
            <Form.Label>Author:</Form.Label>
            <Form.Control type="string" placeholder="Author" />
            <Form.Label>Image URL:</Form.Label>
            <Form.Control type="url" placeholder="Image URL" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
              <option>PROGRAMMING</option>
              <option>CSS BASICS</option>
              <option>VISUAL DESING</option>
              <option>BASED ON YOUR READING HISTORY</option>
          </Form.Control>
          <Form.Group>
          <Form.Label>Time estimated to Read:</Form.Label>
            <Form.Control type='string' placeholder="Time estimated to Read" />
          </Form.Group>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Container Post</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
        
        </div>
    )
  }
}
