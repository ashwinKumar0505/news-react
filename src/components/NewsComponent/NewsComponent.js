import React from 'react'
import classes from './NewsComponent.module.css'

const NewsComponent=(props)=>{
  return(
    <div className={classes.NewsComponent}>
      <img src={props.news.urlToImage} alt={props.news.title}/>
      <h3>{props.news.title}</h3>
      <h5>{props.news.author}</h5>
      <p>{props.news.description}</p>
    </div>
  )
}

export default NewsComponent