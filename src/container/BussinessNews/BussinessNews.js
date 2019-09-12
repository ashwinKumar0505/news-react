import React, { Component } from 'react';
import axios from "axios"
import NewsComponent from "../../components/NewsComponent/NewsComponent"
import classes from './BussinessNews.module.css';
class NewsFeed extends Component {
  state={
    businessNews:[]
  }
  componentDidMount(){
         axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           this.setState({
             businessNews:newsFromApi
           })
         })
  }
  render() { 
    return ( 
      <div>
      <div className={classes.NewsContainer}>
      {this.state.businessNews.map((businessNews,index)=>{
         return <NewsComponent news={businessNews} key={index}/>
      })
      }
      </div>
      </div>
     );
  }
}
 
export default NewsFeed;