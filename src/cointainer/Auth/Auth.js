import React from 'react';
import classes from './Auth.module.css';

const Auth = () => (
     <div className={classes.AuthContainer}>
           <div className={classes.Container}>
                <div className={`${classes.InnerContainer} ${classes.textConatiner}`}>
                   <h1>Welcome!</h1>
                   <p>Register yourself and start shopping!</p>
                   <button>Sign Up</button>
                </div>
                <div className={`${classes.InnerContainer} ${classes.formConatiner}`}>
                    login
                </div>
           </div>
     </div>
)

export default Auth;