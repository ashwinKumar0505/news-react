import React from 'react'
import NavigationItems from "./NavigationItems/NavigationItems"
import classes from "./Header.module.css"
import Logo from "../../assets/hindu.jpg"
const navItems=[{name:"Bussiness",link:"/bussiness"},
                {name:"Sports",link:"/sports"},
                {name:"Cricket",link:"/cricket"},
                {name:"Poltics",link:"/poltics"},
                {name:"Space&Astrology",link:"/space"}]
const Header=()=>
{
 return(
  <div className={classes.Header}>
  <h1>THE HINDU</h1>
  <img src={Logo} alt="logo"/>
  <ul className={classes.NavItems}>
  {
  navItems.map(navItem=><NavigationItems key={navItem.name}  newsType={navItem}/>)
  }
  </ul>
  </div>
);
}
export default Header;