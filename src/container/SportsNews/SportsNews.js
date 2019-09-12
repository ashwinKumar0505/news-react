import React, { Component } from 'react';
import axios from "axios"
import NewsComponent from "../../components/NewsComponent/NewsComponent"
import classes from './SportsNews.module.css';
class SportsNews extends Component {
  state={
    SportsNews:[]
  }
  componentDidMount(){
         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           this.setState({
             SportsNews:newsFromApi
           })
         })
  }
  render() { 
    return ( 
      <div>
      <div className={classes.NewsContainer}>
      {this.state.SportsNews.map((SportsNews,index)=>{
         return <NewsComponent news={SportsNews} key={index}/>
      })
      }
      </div>  
      </div>
     );
  }
}
 
export default SportsNews;