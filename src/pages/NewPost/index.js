import React, {Component} from  'react'
import { Button, Form } from 'react-bootstrap'
import {
  Link
} from "react-router-dom";

import Header from '../../components/Header'

export default class Hola extends Component {
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
    /* this.handleInput = this.handleInput.bind(this) */
    this.addNote = this.addNote.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  /* handleInput({ target: {name,value} }) {
    this.setState({
      [name]: value,
    });
  } */

  onChange(event) {
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
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

  render() {
    return (
      <div className="container">
        <Header />
        <Form>
          <Form.Group  controlId="formBasicEmail">
            <Form.Label className= "mt-3">Title</Form.Label>
            <Form.Control type="string" placeholder="Enter email" name ="Titulo" value={this.state.title} onChange={this.onChange} />

            <Form.Label>Imagen</Form.Label>
            <Form.Control type="string" placeholder="ImageURL" name ="imageURL" value=
            {this.state.imageURL} onChange={this.handleInput} />

            <Form.Label className= "mt-3">Description</Form.Label>
            <Form.Control type="string" placeholder="Description" name ="description" value={this.state.description} onChange={this.handleInput} />

            <Form.Label>Titulo</Form.Label>
            <Form.Control type="string" placeholder="Enter email" name ="Titulo" value={this.state.title} onChange={this.handleInput} />

            <Form.Label>Titulo</Form.Label>
            <Form.Control type="string" placeholder="Enter email" name ="Titulo" value={this.state.title} onChange={this.handleInput} />

            <Form.Label>Titulo</Form.Label>
            <Form.Control type="string" placeholder="Enter email" name ="Titulo" value={this.state.title} onChange={this.handleInput} />

            <Form.Label>Titulo</Form.Label>
            <Form.Control type="string" placeholder="Enter email" name ="Titulo" value={this.state.title} onChange={this.handleInput} />

            <Form.Label>Titulo</Form.Label>
            <Form.Control type="string" placeholder="Enter email" name ="Titulo" value={this.state.title} onChange={this.handleInput} />
          </Form.Group>
        </Form>

        
        <div className="d-flex justify-content-center">
          <Link to="/" exact>
            <button className="btn btn-outline-dark r m-5" type="button">Agregar</button>
          </Link>
        </div>
      </div>
    );
  }
}
