import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Header from '../../components/Header'
import RecentPosts from '../../components/RecentPosts'
import ListPost from '../ListPost'
import PopularOnMedium from './components'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
    }

  logOut() {
    localStorage.removeItem('authTokenUser')
    window.location.href = "/"
  }

  render() {
    const { isUserLogedIn } = this.props
    return (
      <>
      {
        isUserLogedIn ? (
          <div className='container'>
          <Header logOut={this.logOut}/>
          <RecentPosts/>
          <div className="postsContainer">
            <div className="post-list-center">
              <ListPost/>
            </div>
            <div className="post-list-popular">
              <PopularOnMedium/>
            </div>
          </div>
        </div>
        ) : (
          
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Subscribe please!!</h5>
                </div>
                <div className="modal-footer">
                <Link to="/" className="btn btn-primary">Yes!</Link>
                </div>
              </div>
            </div>
          
        )
      }      
      </>
    )
  }
}
