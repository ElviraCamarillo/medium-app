import React from 'react'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function PostDetail({
    id,
    title,
    imageURL,
    description,
    author,
    contentPost,
    category,
    estimaredReadTime,
    date
  }){

    return (     
        <div className='post-container'>
            <h1 className='post-title'>{title}</h1>
            <h3 className='post-subtitle'>{description}</h3>
            <div className='postData'>
                <div className='userPhoto'>
                    {/* <img className="author-photo" alt= "" src={authorPhoto}/> */}
                </div>
                <div className='author-time'>
                    <p className='post-author'>{author}</p>
                    <p className= 'post-timedate'>{date} - {estimaredReadTime}</p>
                </div>
            </div>
            <img className='post-img' alt= "" src={imageURL}/>
            <div className='post-text'>{ReactHtmlParser(contentPost)}</div>
        </div>
    )
}

export default PostDetail;
