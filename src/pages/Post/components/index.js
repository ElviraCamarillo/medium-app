import React from 'react'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Moment from 'react-moment'

import authorPhoto from '../img/author.jpg'

function PostDetail({
    id,
    title,
    imageURL,
    description,
    author,
    contentPost,

    estimaredReadTime,
    date
  }){

    return (     
        <div className='post-container'>
            <h1 className='post-title'>{title}</h1>
            <h3 className='post-subtitle'>{description}</h3>
            <div className='postData'>
                <div className='userPhoto'>
                    <img className="author-photo" alt= "" src={authorPhoto}/>
                </div>
                <div className='author-time'>
                    <p className='post-author'>{author}</p>
                    <p className='Post-date'>
                        <Moment format="MMM , DD">
                        {date}
                        </Moment> 
                        <span> · {estimaredReadTime} min read</span>
                        <span class="icon-star time-info">&#x205f;&#x205f;&#x2605;</span>
                    </p>
                </div>
            </div>
            <img className='post-img' alt= "" src={imageURL}/>
            <div className='post-text'>{ReactHtmlParser(contentPost)}</div>
        </div>
    )
}

export default PostDetail;
