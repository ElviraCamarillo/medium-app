import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './fonts.css'

import PostId from './pages/Post'
import ListPost from './pages/ListPost'
import Post from './components/Post'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
    this._renderPost = this._renderPost.bind(this)
  }

  componentDidMount () {
    console.log('Mount')
    fetch('http://blog-medium-api.mybluemix.net/posts/')
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
      {_id}) => {
        return <Post 
        _id={_id}
        
        />
    })
  }


  render() {
    const { post } = this.state
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/">
              <ListPost />
            </Route>
            <Route exact path={`/post/`}>
              <PostId />
            </Route>
          </Switch>          
        </div>
      </Router>
    )
  }
}
