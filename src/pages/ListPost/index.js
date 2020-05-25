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
      console.log(data)
      var postArray = []
      for (let key in data.post) {
        postArray.push({
          key,
          title: data.post[key].title,
          imageUrl:data.post[key].imageUrl,
          description:data.post[key].description,
          author:data.post[key].author,
          contentPost:data.post[key].contentPost,
          category:data.post[key].category,
          estimaredReadTime:data.post[key].estimaredReadTime,
          date:data.post[key].date
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
      {key, 
      title,
      imageUrl,
      description,
      author,
      contentPost,
      category,
      estimaredReadTime,
      date}) => {
        return <Post 
        key={key}
        title ={title}
        imageUrl = {imageUrl}
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
    console.log('render')
    return (
      <div className='Post-contanier'>
        <ul>{this._renderPost()}</ul>  
        <p>Hola desde Post</p>       
      </div>
    )
  }
}
