import React from 'react'
import logo from './img/medium-logo.png'
import logoSm from './img/medium-sm-logo.png'
import profile from './img/profile-photo.jpg'
import search from './img/search.png'
import bookmark from './img/bookmark.png'
import notification from './img/notification.png'

import "./Header.css";
import "../../Fonts.css"

function Header() {
  return (
    <header>
      <div className="hdr">
        <div>
          <img className="logo d-none d-sm-none d-md-block" alt= "" src={logo}/>
          <img className="logoSm d-block d-sm-block d-md-none" alt= "" src={logoSm}/>
        </div>
        <div className="d-flex justify-content align-items-center">
          <img className="icon" alt= "" src={search}/>
          <img className="icon d-none d-sm-none d-md-block" alt= "" src={bookmark}/>
          <img className="icon" alt= "" src={notification}/>
          <button className="btn btn-outline-dark" type="button">Publicar</button>
          <img className="profile-photo" alt= "" src={profile}/>
        </div>
      </div>
      <div className="col-12 py-3">
          <nav>
            <ul className="scrollmenu">
              <li>{"<"}</li>
              <li>HOME</li>
              <li>CORONAVIRUS BLOG</li>
              <li>POPULAR</li>
              <li className="d-none d-sm-none d-md-block">ONEZERO</li> 
              <li className="d-none d-sm-none d-md-block">ELEMENTAL</li>
              <li className="d-none d-sm-none d-md-block">GEN</li>
              <li className="d-none d-sm-none d-md-block">ZORA</li>
              <li className="d-none d-sm-none d-md-block">FORGE</li>
              <li className="d-none d-sm-none d-md-block">HUMAN PARTS</li>
              <li className="d-none d-sm-none d-md-block">MAKER</li>
              <li className="d-none d-sm-none d-md-block">LEVEL</li>
              <li>></li>
            </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header

