import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './fonts.css'

import PostId from './pages/Post'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/post">
              <PostId />
            </Route>
          </Switch>          
        </div>
      </Router>

    )
  }
}

