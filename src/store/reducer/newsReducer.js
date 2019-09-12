import React from "react";
import * as actionTypes from "../actions/actionTypes";
const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THIS_NEWS:
      return {
        ...state,
        news:action.news
      };
    default:return state;
  }
};
export default newsReducer;