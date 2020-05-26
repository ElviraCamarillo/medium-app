import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

import '../RecentPosts/RecentPosts.css'

export default class RightCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { imgCardRight } = this.props
    return (
      <Router>
          <div className="card w-100 rounded-0 border-0 mt-2">
            <div className="img-guys">
            <img className="card-img-top content-img-guys" src = {imgCardRight} alt="Guys Right Now"/>
          </div>
            <div className="card-body">
              <div>
                <h1 className="card-title title-post">Don’t Just Avoid the Virus — Defeat It by Strengthening... </h1>
                <p className="color-secondary">
                    Simple, science-based steps to boost y...
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-between">
                  <h6><a className="author-info"><span className="show-dialog">Amory Lovins</span></a></h6>
                  <a className="time-info d-flex align-items-center color-secondary">
                    <time datetime="2020-03-25 20:00" className="time-info">Mar 25 </time>
                    <span className="icon-point time-info">&#x205f;&#x205f;&#128900;&#x205f;&#x205f;</span>
                    <span className="time-info">7 min read</span>
                    <span className="icon-star time-info">&#x205f;&#x205f;&#x2605;</span>
                  </a>
                </div>
                <div className="d-flex align-items-center">
                    <span className="icon-points">&#x23fa;&#x23fa;&#x23fa;</span>
                </div>
              </div>
            </div>
          </div>  
      </Router>
    )
  }
}
