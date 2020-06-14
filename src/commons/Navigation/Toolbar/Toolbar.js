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
        top: '80px'
    });
    const getStyles = () => {
        let style = {
            position: 'relative',
            left: 0,
            top: '80px'
        }
        debugger;
        if (navLinksRef.current) {

            const elePosition = navLinksRef.current.getBoundingClientRect();
            style['left'] = elePosition['left'] + 'px';
            style['top'] = elePosition['top'] + 'px';
        }
        console.log(style);
        setPopUpStyle(style)
    }
    return (<Aux>
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.LeftOptionContainer}>
                <p className={classes.Title}>
                    Clientele
             </p>
                <div className={classes.mainNavLinks} ref={navLinksRef}> <NavigationItems /> </div>

            </div>
            <IconNavigationItems />
        </header>
        <div className={classes.CategoryContainer} style={popUpStyle} onClick={() => getStyles()}>
            abc
        </div>
    </Aux>);
};

export default Toolbar;
