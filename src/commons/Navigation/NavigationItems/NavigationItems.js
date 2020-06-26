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
            key: 'electronics',
            label: 'Electronics'
        },
        {
            key: 'home',
            label: 'Home & Living'
        }
    ];
    const navLinksEle = navLinks.map(e => {
        return <li key={e.key} style={{ cursor: 'pointer' }} onMouseOver={(event) => { event.stopPropagation(); props.mouseHovered(e.key) }}>{e.label}</li>
    });

    return <ul className={classes.navContainer}>
        {navLinksEle}
    </ul>
}




export default navigationItems;