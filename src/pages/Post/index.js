import React, { Component } from 'react'
import authorPhoto from './img/author.jpg'

import Header from '../../components/Header'

import './Post.css'

export default class Post extends Component {
  
  
  render() {
    const title = 'The Coronavirus Vaccine May Not Work on the Elderly'
    const subtitle = 'For those over 65, the pandemic is unlikely to end when the first vaccines arrive'
    const author = 'Brendan Borrell'
    const date = 'May 22'
    const timeRead = '8 min read'
    const postImg = 'https://miro.medium.com/max/1400/1*wpjJKRB1oqZz1kuxrLwoLw.jpeg'
    const textPost = 'Last Friday, President Trump stood in the White House Rose Garden and announced “Operation Warp Speed,” a plan to deliver a vaccine for the coronavirus by the end of the year. At the president’s side was Moncef Slaoui, who had recently stepped down from the board of Moderna, the first U.S. company to test its vaccine on humans, in order to lead the effort. “Mr. President, I have very recently seen early data from a clinical trial with a coronavirus vaccine,” said Slaoui. “These data make me feel even more confident that we will be able to deliver a few hundred million doses of vaccine by the end of 2020.” Then, early this week, Moderna unveiled early positive results from its safety trials, along with plans to take the Massachusetts-based company public. Operation Warp Speed’s promise feeds into our hopes of finding immunity. But whether a vaccine arrives in six months or 12 months, it will come with an enormous caveat that scientists have been warning of for months, and our leaders have all but ignored: The first successful vaccine against the coronavirus may well fail the people who need it most — 50 million people over 65.'
    return (
      <div>        
        <div className='container'>

          <Header />     
           
          <div className='post-container'>
            <h1 className='post-title'>{title}</h1>
            <h3 className='post-subtitle'>{subtitle}</h3>
            <div className='postData'>
              <div className='userPhoto'>
                <img className="author-photo" alt= "" src={authorPhoto}/>
              </div>
              <div className='author-time'>
                <p className='post-author'>{author}</p>
                <p className= 'post-timedate'>{date} - {timeRead}</p>
              </div>
            </div>
            <img className='post-img' alt= "" src={postImg}/>
            <p className='post-text'>{textPost}</p>
          </div>

        </div>        
      </div>
    )
  }
}
