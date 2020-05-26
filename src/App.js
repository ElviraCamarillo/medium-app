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
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/signin">
              <SignIn/>
            </Route>
            <Route exact path="/">
              <Home />
              <Index />
            </Route>
            <Route path='/post/:id' component={PostDetail} exact />
            <Route path='/newpost' component={NewPost} exact />
          </Switch>          
        </div>
      </Router>
    )
  }
}
