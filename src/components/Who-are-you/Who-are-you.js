import React from 'react';
import classes from './Who-are-you.module.css';
import { Link } from 'react-router-dom';


const whoAreYou = (props) => (
    <div className={classes.slider}>
        <div className={classes.load}>
        </div>
        <div className={classes.content}>
            <div className={classes.topnav}>
                <Link to="/shop" className={classes.actionButton}>Buy</Link>
                <Link to="/" className={classes.actionButton}>Sell</Link>
            </div>
            <div className={classes.main}>

                <h1>Clientele</h1>
                <div className={classes.sloganContainer}>
                    <p>Inspiring store to</p>
                    <div className={classes.sloganWords}>
                        <span>buy</span>
                        <span>sell</span>
                        <span>grow</span>
                        <span>seek</span>
                        <span>find</span>
                        <span>enjoy</span>
                    </div>
                    <p className={classes.moreWord}>more.</p>
                </div>
            </div>
        </div>
    </div>
)

export default whoAreYou;