import React from 'react';
import classes from './NavigationItems.module.css';
const navigationItems = (props) => (
    <ul className={classes.navContainer}>
        <li>Fashion</li>
        <li>Sports</li>
        <li>Electronics</li>
        <li>Home & Living</li>
    </ul>
)

export default navigationItems;