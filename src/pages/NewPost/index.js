import React, {Component} from  'react'

import Header from '../../components/Header'

import NewPostForm from './components/NewPostForm'

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
    };
    //this.handlerNewPostForm = this.handlerNewPostForm.bind(this);
  }

  async onSubmit(post) {
    console.log(post)
    await fetch(
      'http://blog-medium-api.mybluemix.net/posts',
      {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json'
        }
      }
    )
    .then(response => response.json())
    .then(({name}) => {
      console.log('Estamos aquí')
      const { posts } = this.state
      post['key'] = name
      this.setState({
        posts: {...posts, post}
      })
    })
  }

  render() {
    console.log('estamos en el render newpost')
    return (
      <div className="Container">
        <div>
          <Header />
          <div className="Post-container">
            <NewPostForm 
              onSubmit={this.onSubmit.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
