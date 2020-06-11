import React from 'react';
import classes from './IconNavigationItems.module.css';
import Aux from '../../../hoc/Aux/Aux';

const iconNavigationItems = (props) => (
    <Aux>
        <div className={classes.iconContainerMobile}>
            <i className="fa">&#xf002;</i>
            <i className="fa">&#xf007;</i>
            <i className="fa">&#xf290;</i>
            <i className="fa">&#xf004;</i>
        </div>
        <div className={classes.iconContainerDesktop}>
            <i className="fa">&#xf007;</i>
            <i className="fa">&#xf290;</i>
            <i className="fa">&#xf004;</i>
        </div>
    </Aux>
)

export default iconNavigationItems;
