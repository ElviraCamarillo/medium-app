import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import '../RecentPosts/RecentPosts.css'

export default class LeftCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { imgCardLeft } = this.props
        return (
            <Router>
                <div className="card w-100 border rounded-0 border-0">
                    <div className="img-guys">
                        <img className="card-img-top content-img-guys" src={ imgCardLeft } alt="Guys Right Now"/>
                    </div>
                    <div className="card-body ml-5">
                        <div>
                            <h1 className="card-title title-post">America Needs Guys Right Now, Not Men</h1>
                            <p className="color-secondary">
                                Some of these men are gonna die shortly, and probably take your grandma along with them.
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column justify-content-between">
                                <h6><Link to="" className="author-info"><span className="show-dialog">Drew Magary</span></Link> in <Link to="" className="company-info"><span className="company-dialog">Forge</span></Link></h6>
                                <Link to="" className="time-info d-flex align-items-center color-secondary">
                                    <time datetime="2020-03-25 20:00" className="time-info">Mar 25 </time>
                                    <span className="icon-point time-info">&#x205f;&#x205f;&#128900;&#x205f;&#x205f;</span>
                                    <span className="time-info">7 min read</span>
                                    <span className="icon-star time-info">&#x205f;&#x205f;&#x2605;</span>
                                </Link>
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
