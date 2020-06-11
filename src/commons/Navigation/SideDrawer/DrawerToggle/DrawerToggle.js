import React from 'react';
import classes from './DrawerToggle.module.css'

const drawToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <i className={`fa ${classes.hamburgerIcon}`}>&#xf0c9;</i>
    </div>
);

export default drawToggle;