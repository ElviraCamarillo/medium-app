import React, { Component } from 'react'

import logo from '../Header/img/medium-logo.png'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className="footer-description">
          <div className="col-4">
            <h3>Discover Medium</h3>
            <p>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
          </div>
          <div className="col-4">
            <h3>Make Medium yours</h3>
            <p>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore</p>
          </div>
          <div className="col-4">
            <h3>Make Medium yours</h3>
            <p>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore</p>
          </div>
        </div>
        <div className="row">
        <img className="logo d-none d-sm-none d-md-block" alt= "" src={logo}/>
        </div>
        
      </div>
    )
  }
}

 

