import axios from "axios"
import { SET_THIS_NEWS } from "./actionTypes"

export const bussinessNews=()=>{
        console.log("here")
        return dispatch=>{
             axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           dispatch(setThisNews(newsFromApi))
         })
        }  
}
export const sportsNews=()=>{
        return dispatch=>{
             axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           dispatch(setThisNews(newsFromApi))
         })
        }  
}
export const cricketNews=()=>{
        return dispatch=>{
             axios.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-12&sortBy=publishedAt&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           dispatch(setThisNews(newsFromApi))
         })
        }  
}
export const polticsNews=()=>{
        return dispatch=>{
             axios.get("https://newsapi.org/v2/everything?q=apple&from=2019-09-11&to=2019-09-11&sortBy=popularity&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           dispatch(setThisNews(newsFromApi))
         })
        }  
}
export const spaceNews=()=>{
        return dispatch=>{
             axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=67aa4262a20a484ca92b7b062044547e")
         .then(Response=>{
           const newsFromApi=Object.values(Response.data.articles)
           dispatch(setThisNews(newsFromApi))
         })
        }  
}
export const setThisNews=(news)=>{
  return {
     type:SET_THIS_NEWS,
     news:news
  }
}