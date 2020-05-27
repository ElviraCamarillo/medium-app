import React, { Component } from 'react'

import '../RecentPosts/RecentPosts.css'

export default class ItemCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { img, author, company, readTime, title } = this.props
        return (
            <>
                <div className="card post-stack mb-3 rounded-0 border-0 mt-2 ">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={img} className="card-img" alt="Img Artycle"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body pt-0 pb-2 pl-4">
                                <div>
                                    <h2 className="card-title title-post-stack">
                                        {title}
                                    </h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column justify-content-between">
                                        <h6><a className="author-info"><span className="show-dialog">{ author }</span></a> in <a className="company-info"><span className="company-dialog">{ company }</span></a></h6>
                                        <a class="time-info d-flex align-items-center color-secondary">
                                            <time datetime="2020-03-25 20:00" className="time-info-stack">a few ago</time>
                                            <span className="icon-point time-info">&#x205f;&#x205f;&#128900;&#x205f;&#x205f;</span>
                                            <span className="time-info">{readTime}</span>
                                            <span className="icon-star time-info">&#x205f;&#x205f;&#x2605;</span>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 0 0 7 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 0 0-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 0 0-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            </>
        )
    }
}
