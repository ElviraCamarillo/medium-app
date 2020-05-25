import  React from 'react'
import './Post.css'

function Post({
  title,
  imageUrl,
  description,
  author,
  contentPost,
  category,
  estimaredReadTime,
  date
}) {
  return(
    <div className='Post'>
      <div className='Post-content'>
      <p className='Post-category'>{category}</p>
      <h3 className='Post-title'>{title}</h3>
      <p className='Post-description'>{description}</p>
      <p className='Post-author'>{author}</p>
      <p className='Post-date'>{date}, {estimaredReadTime}</p>
      </div>
      <div className='Post-image'>
        <a style={{ backgroundImage: `url(${imageUrl })` }} />
      </div>
    </div>
  )
}

export default Post;
