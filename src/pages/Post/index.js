import React, { Component } from 'react'
import authorPhoto from './img/author.jpg'

import Header from '../../components/Header'
import Post from '../../components/Post'

import './Post.css'

export default class PostId extends Component {
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
    return (
      <div>        
        <div className='container'>

          <Header />     
           
          <div className='post-container'>
            <h1 className='post-title'>{post.title}</h1>
            <h3 className='post-subtitle'>{post.description}</h3>
            <div className='postData'>
              <div className='userPhoto'>
                <img className="author-photo" alt= "" src={post.authorPhoto}/>
              </div>
              <div className='author-time'>
                <p className='post-author'>{post.author}</p>
                <p className= 'post-timedate'>{post.date} - {post.estimatedReadTime}</p>
              </div>
            </div>
            <img className='post-img' alt= "" src={post.imageURL}/>
            <p className='post-text'>{post.contentPost}</p>
          </div>

        </div>        
      </div>
    )
  }
}
