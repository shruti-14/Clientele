import React from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import IconNavigationItems from '../IconNavigationItems/IconNavigationItems';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.LeftOptionContainer}>
            <p className={classes.Title}>
                Clientele
             </p>
            <div className={classes.mainNavLinks}> <NavigationItems /> </div>

        </div>
        <IconNavigationItems />
    </header>
);

export default toolbar;
