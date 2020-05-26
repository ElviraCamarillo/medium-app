import React from 'react'
import hashtag from './img/hashtag.png'

import logo from './img/medium-logo.png'
import logoSm from './img/medium-sm-logo.png'
import elvira from './img/elvira.jpg'
import tavo from './img/tavo.jpg'
import airy from './img/airy.jpg'
import omar from './img/omar.jpg'



import "./index.css";

export default function Index() {
  return (
    <div className='container'>
      <div className='head'>
        <div className='logos'>
          <img className="logo d-none d-sm-none d-md-block" alt= "" src={logo}/>
          <img className="logoSm d-block d-sm-block d-md-none" alt= "" src={logoSm}/>
        </div>
        <div className='head-right'>
          <ul className='head-right-txt'>
            <li className="d-none d-sm-none d-md-block">Subscribe</li>
            <li className="d-none d-sm-none d-md-block">Write</li>
            <li className="d-none d-sm-none d-md-block">Sign in</li>
            <button className='btn btn-secondary'>Get stared</button>
          </ul>
        </div>      
      </div>

      <div className='index-body'>
        <h1 className='index-title'>Get smarted about you what matter to you.</h1>
        <h4 className='index-subtitle'>Select what you're into. We'll help you find great things to read.</h4>
      </div>

      <div className='btns-section'>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Future
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={elvira}/>
          Elvira
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Technology
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Elemental
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Health
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Science
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={tavo}/>
          Tavo
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Bussines
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Marker
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Work
        </div>
        <div className= 'btn-index'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Culture
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={airy}/>
          Airy
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Tenderly
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Food
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={omar}/>
          Omar
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Programming
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Desing
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          LGBTQIA
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Neuroscience
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Modus
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Politics
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Relationships
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Human Parts
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Self
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Startups
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Cryptocurrency
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Forge
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Data Science
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Productivity
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Artificial Inteligence
        </div>
        <div className= 'btn-index d-none d-sm-none d-md-block'>
          <img className="hashtag" alt= "" src={hashtag}/>
          Election 2020
        </div>
      </div>

      <div className='last-section'>
        <button className='btn btn-secondary'>Get stared</button>
        <p>Already have an account? Sing in</p>

      </div>

    </div>
    
  

  )
}
