import React, { Component } from 'react'

//External Packages
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//pages
import ListPost from './pages/ListPost'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './fonts.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/'>
            <ListPost/>
          </Route>
        </div>
      </Router>
    )
  }
}

