import React, { Component } from 'react'

import Header from '../../components/Header'
import RecentPosts from '../../components/RecentPosts'
import ListPost from '../ListPost'
import PopularOnMedium from './components'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
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
    )
  }
}
