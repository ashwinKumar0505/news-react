import React, { Component } from 'react';
import NewsComponent from "../../components/NewsComponent/NewsComponent"
import classes from './SportsNews.module.css';
import {connect} from "react-redux";
import {sportsNews} from "../../store/actions/newsActionCreator"
class SportsNews extends Component {
  componentDidMount(){
    this.props.sportsNews()
  }
  render() { 
    return ( 
      <div>
      <div className={classes.NewsContainer}>
      {this.props.news.map((SportsNews,index)=>{
         return <NewsComponent news={SportsNews} key={index}/>
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
    sportsNews:()=>dispatch(sportsNews())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SportsNews);