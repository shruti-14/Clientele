import React from 'react';
import classes from './who-are-you.module.css'


const whoAreYou = (props) => (
    <div className={classes.slider}>
        <div className={classes.load}>
        </div>
        <div className={classes.content}>
            <div className={classes.topnav}>
                {/* <a>Buy</a>
                    <a>Sell</a> */}
                <a className={classes.actionButton}>Buy</a>
                <a className={classes.actionButton}>Sell</a>
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