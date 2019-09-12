import React from 'react';
import './App.css';
import Header from "./components/Header/Header"

import BussinessNews from "./container/BussinessNews/BussinessNews"
import {Switch,Route} from "react-router-dom"

import SportsNews from "./container/SportsNews/SportsNews"
function App() {
  return (
    <div className="App">
      <Header />
     <Switch>
     <Route path="/bussiness" component={BussinessNews} />
     <Route path="/sports" component={SportsNews} />
     </Switch>
    </div>
  );
}

export default App;
