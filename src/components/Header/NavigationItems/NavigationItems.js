import React from 'react'
import classes from "./NavigationItems.module.css"
import {NavLink} from "react-router-dom"
const NavigationItems=(props)=>(<li className={classes.items}>
<NavLink to={props.newsType.link} exact activeClassName={classes.active}>
{props.newsType.name}
</NavLink>
</li>)

export default NavigationItems;