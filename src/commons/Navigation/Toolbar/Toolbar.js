import React, { useRef, useState } from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import IconNavigationItems from '../IconNavigationItems/IconNavigationItems';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';

const Toolbar = (props) => {
    const navLinksRef = useRef(null);
    const [popUpStyle, setPopUpStyle] = useState({
        position: 'relative',
        left: 0,
        top: 0,
        display: 'none'
    });
    const getStyles = () => {
        let style = { ...popUpStyle };
        if (navLinksRef.current) {
            const elePosition = navLinksRef.current.getBoundingClientRect();
            style['left'] = (elePosition['left'] + 50) + 'px';
            style['top'] = (elePosition['top'] + 50) + 'px';
            style['display'] = 'block'
        }
        console.log(style);
        setPopUpStyle(style)
    }
    const removeStyles = () => {
        debugger;
        setPopUpStyle({
            position: 'relative',
            left: 0,
            top: 0,
            display: 'none'
        });
    }
    return (<Aux>
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.LeftOptionContainer}>
                <p className={classes.Title}>
                    Clientele
             </p>
                <div className={classes.mainNavLinks} ref={navLinksRef} > <NavigationItems mouseHovered={(key) => getStyles()} mouseLeft={() => removeStyles()} /> </div>
            </div>
            <IconNavigationItems />
        </header>
        <div className={classes.CategoryContainer} style={popUpStyle}>
            abc
        </div>
    </Aux>);
};

export default Toolbar;
