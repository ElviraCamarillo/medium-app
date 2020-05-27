import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


//import "./NewPostForm.css"

export default class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imageURL: '',
      description:'',
      author:'',
      contentPost:'',
      category:'',
      estimatedReadTime:'',

    };
    this.addPost = this.addPost.bind(this)
  }

//  handleInput({ target }) {
//    this.setState({
//      [name]: value,
//    });
//  }

  onChange (event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addPost(event) {
    event.preventDefault()
    const { title, imageURL, description, author, contentPost, category, estimatedReadTime } = this.state
    const post = {
      title,
      imageURL,
      description,
      author,
      contentPost,
      category,
      estimatedReadTime
    }
    this.props.onSubmit(post)
    this.setState({
      title: '',
      imageURL: '',
      description:'',
      author:'',
      contentPost:'',
      category:'',
      estimatedReadTime:''
    })
  }
  
  render() {    
    return (
      <div className='container'>
        <div className="container-form">
          <Form onSubmit={this.addPost.bind(this)} >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="string" placeholder="Title" name="title" value={this.state.title} onChange={this.onChange.bind(this)} />
              <Form.Label>Description:</Form.Label>
              <Form.Control type="string" placeholder="Abstrac Post" name="description" value={this.state.description} onChange={this.onChange.bind(this)} />
              <Form.Label>Author:</Form.Label>
              <Form.Control type="string" placeholder="Author" name="author" value={this.state.author} onChange={this.onChange.bind(this)}/>
              <Form.Label>Image URL:</Form.Label>
              <Form.Control type="url" placeholder="Image URL" name="imageURL" value={this.state.imageURL} onChange={this.onChange.bind(this)}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category" value={this.state.category} onChange={this.onChange.bind(this)}>
                <option value='PROGRAMMING'>PROGRAMMING</option>
                <option value='CSS BASICS'>CSS BASICS</option>
                <option value='VISUAL DESING'>VISUAL DESING</option>
                <option value='BASED ON YOUR READING HISTORY'>BASED ON YOUR READING HISTORY</option>
            </Form.Control>
            <Form.Group>
            <Form.Label>Time estimated to Read:</Form.Label>
              <Form.Control type='string' placeholder="Time estimated to Read" name="estimatedReadTime" value={this.state.estimatedReadTime} onChange={this.onChange.bind(this)}/>
            </Form.Group>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Container Post</Form.Label>
              <Form.Control type="textarea" name="contentPost" value={this.state.contentPost} onChange={this.onChange.bind(this)}/>
            </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
          </Form>          
        </div>
      </div>
    )
  }
}