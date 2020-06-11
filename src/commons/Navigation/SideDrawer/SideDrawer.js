import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={`${classes.SideDrawer} ${props.open ? `${classes.openSideDrawer}` : `${classes.closeSideDrawer}`}`}>
                <div className={classes.TitleContainer}>
                    <p className={classes.Title}>
                        Clientele
                    </p>
                    <i className={`fa ${classes.faTimesThin}`} onClick={props.closed}></i>
                </div>
                <div className={classes.mainNavLinks}>
                    <NavigationItems />
                </div>
            </div>
        </Aux>
    );
}

export default sideDrawer;

