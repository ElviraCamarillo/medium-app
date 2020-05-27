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
                <svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 0 0 7 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 0 0-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 0 0-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg>
                </div>
              </div>
            </div>
          </div>  
      </Router>
    )
  }
}
