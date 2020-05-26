import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Component
import Post from '../../components/Post'
import Header from '../../components/Header'


export default class ListPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
    this._renderPost = this._renderPost.bind(this)
  }

  componentDidMount () {
    console.log('Mount')
    fetch('http://blog-medium-api.mybluemix.net/posts/.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      const postsData = data.data.posts
      var postArray = []
      for (let _id in postsData) {
        postArray.push({
          _id,
          title: postsData[_id].title,
          imageURL:postsData[_id].imageURL,
          description:postsData[_id].description,
          author:postsData[_id].author,
          contentPost:postsData[_id].contentPost,
          category:postsData[_id].category,
          estimaredReadTime:postsData[_id].estimaredReadTime,
          date:postsData[_id].date
        })
      }
      this.setState({
        post: postArray
      })
    })
  }
  
  _renderPost(){
    const { post } = this.state
    return post.map((
      {_id, 
      title,
      imageURL,
      description,
      author,
      contentPost,
      category,
      estimaredReadTime,
      date}) => {
        return <Post 
        _id={_id}
        title ={title}
        imageURL = {imageURL}
        description = {description}
        author = {author}
        contentPost = {contentPost}
        category = {category}
        estimaredReadTime = {estimaredReadTime}
        date = {date}
        />
    })
  }
    
  render() {
    const { post } = this.state
    console.log('render')
    return (
      <div className='container'>
        <Header />
        <div className='Post-contanier'>
          <ul>
          <Link to={`/post/${post._id}`}>{this._renderPost()}</Link>
          </ul>
          
          <p>Hola desde Post</p>       
        </div>
      </div>      
    )
  }
}
