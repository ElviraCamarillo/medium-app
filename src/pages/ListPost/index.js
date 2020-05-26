import React, { Component } from 'react'

// Component
import Post from '../../components/Post'

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
    fetch('http://blog-medium-api.mybluemix.net/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)

      const postsData = data.data.posts
      var postArray = []
      for (let key in postsData) {
        postArray.push({
          id: postsData[key]._id,
          title: postsData[key].title,
          imageURL:postsData[key].imageURL,
          description:postsData[key].description,
          author:postsData[key].author,
          contentPost:postsData[key].contentPost,
          category:postsData[key].category,
          estimaredReadTime:postsData[key].estimatedReadTime,
          date:postsData[key].date,
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
      {
        id, 
        title,
        imageURL,
        description,
        author,
        contentPost,
        category,
        estimaredReadTime,
        date
      }) => {
        return <Post
        id={id}
        title ={title}
        imageURL = {imageURL}
        description = {description}
        author = {author}
        contentPost = {contentPost}
        category = {category}
        date = {date}
        estimaredReadTime = {estimaredReadTime}
        />
    })
  }
    
  render() {
    console.log('render')
    return (
      <div className='Post-contanier'>
        <ul>{this._renderPost()}</ul>       
      </div>
    )
  }
}
