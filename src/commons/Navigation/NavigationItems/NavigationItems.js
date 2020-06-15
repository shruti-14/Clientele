import React from 'react';
import classes from './NavigationItems.module.css';
const navigationItems = (props) => {
    const navLinks = [
        {
            key: 'fashion',
            label: 'Fashion'
        },
        {
            key: 'sports',
            label: 'Sports'
        },
        {
            key: 'Electronics',
            label: 'Electronics'
        },
        {
            key: 'home',
            label: 'Home & Living'
        }
    ];
    const navLinksEle = navLinks.map(e => {
        return <li key={e.key} onMouseEnter={() => props.mouseHovered(e.key)} onMouseLeave={() => props.mouseLeft()}>{e.label}</li>
    });

    return <ul className={classes.navContainer}>
        {navLinksEle}
    </ul>
}




export default navigationItems;