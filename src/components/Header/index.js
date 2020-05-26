import React, { Component } from "react";
import logo from './img/medium-logo.png'
import logoSm from './img/medium-sm-logo.png'
import profile from './img/profile-photo.jpg'
import search from './img/search.png'
import bookmark from './img/bookmark.png'
import notification from './img/notification.png'
import {
  Link
} from "react-router-dom";

import "./Header.css";
import "../../fonts.css"

export default class Header extends Component {
  constructor(props){
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    this.props.logOut()
  }

  render() {
    return (
      <header>
        <div className="hdr">
          <div>
          <Link to="/" exact>
            <img className="logo d-none d-sm-none d-md-block" alt= "" src={logo}/>
            <img className="logoSm d-block d-sm-block d-md-none" alt= "" src={logoSm}/>
          </Link>
          </div>
          <div className="d-flex justify-content align-items-center">
            <img className="icon" alt= "" src={search}/>
            <img className="icon d-none d-sm-none d-md-block" alt= "" src={bookmark}/>
            <img className="icon" alt= "" src={notification}/>
            <Link to="/newpost" exact>
              <button className="btn btn-outline-dark" type="button">Publicar</button>
            </Link>
            <Link to="/" onClick={this.toggleMenu} className="btn btn-outline-dark ml-1" type="button">LogOut</Link>
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
}
