import React, { Component } from 'react'
import Header from '../../components/Header'
import {
  Link
} from "react-router-dom";
import { Form } from 'react-bootstrap';

class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      imageURL: '',
      description: '',
      author: '',
      contentPost: '',
      category: '',
      estimaredReadTime: '',
      date: ''
    }
  }

  handleInput({ target: {name,value} }) {
    this.setState({
      [name]: value,
    });
  }

  addNote(event) {
    event.preventDefault()
    const { title, imageURL, description, author, contentPost, category, estimaredReadTime, date } = this.state
    const note = {
      title,
      imageURL,
      description,
      author,
      contentPost,
      category,
      estimaredReadTime,
      date
    }
    this.props.handlerNewNote(note)
    this.setState({
      title: '',
      imageURL: '',
      description: '',
      author: '',
      contentPost: '',
      category: '',
      estimaredReadTime: '',
      date: ''
    })
  }

  render () {
    return (
      <div className="container">
        <Header/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form>
        
        <div className="d-flex justify-content-center">
          <Link to="/" exact>
            <button className="btn btn-outline-dark m-5" type="button">Agregar</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default componentName
