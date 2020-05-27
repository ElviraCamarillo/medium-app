import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './Fonts.css'
import './App.css';

// Import Page
import Home from './pages/Home'
import PostDetail from "./pages/Post";
import NewPost from "./pages/NewPost";
import Index from './pages/Index'
import SignIn from "./pages/SignIn";


export default class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    isUserLogedIn: false
  }
  }

  componentDidMount() {
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken) {
      this.setState({
        isUserLogedIn: true
      })
    }
  }
  
  render() {
    const { isUserLogedIn } = this.state
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/signin">
              <SignIn/>
            </Route>
            <Route exact path="/home">
              <Home isUserLogedIn={ isUserLogedIn } />
            </Route>
            <Route path='/post/:id' isUserLogedIn={ isUserLogedIn } component={PostDetail} exact/>
            <Route path='/newpost' component={NewPost} exact />
          </Switch>          
        </div>
      </Router>
    )
  }
}
