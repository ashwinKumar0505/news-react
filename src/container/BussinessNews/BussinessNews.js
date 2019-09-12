import React, { Component } from 'react';
import NewsComponent from "../../components/NewsComponent/NewsComponent"
import classes from './BussinessNews.module.css';
import {connect} from "react-redux"
import {bussinessNews} from "../../store/actions/newsActionCreator"
class NewsFeed extends Component {
  componentDidMount(){
    this.props.bussinessNews();
  }
  render() { 
    return ( 
      <div>
      <div className={classes.NewsContainer}>
      {this.props.news.map((businessNews,index)=>{
         return <NewsComponent news={businessNews} key={index}/>
      })
      }
      </div>
      </div>
     );
  }
}
const mapStateToProps=state=>{
  return {
     news:state.news,
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    bussinessNews:()=>dispatch(bussinessNews())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);