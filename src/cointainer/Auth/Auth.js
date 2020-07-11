import React, { useState } from 'react';
import classes from './Auth.module.css';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
const Auth = ({ match }) => {
    const [isLoginActive, setLoginActive] = useState(true);
    return <div className={classes.AuthContainer}>
        <div className={classes.Container}>
            <div className={`${classes.InnerContainer} ${classes.textConatiner}`}>
                <h5 className={classes.TextContainerHeading}>{`${isLoginActive ? 'New to Clientele?'
                    :
                    'Welcome back!'}`}</h5>
                <p>Enter your personal details and start shopping with us</p>
                {/* <button>Sign Up</button> */}
            </div>
            <div className={`${classes.InnerContainer} ${classes.formConatiner}`}>
                <Switch>
                    <Route exact path='/auth' component={Login} />
                    <Route path={`${match.path}/login`} component={Login} />
                    <Route path={`${match.path}/register`} component={Register} />
                </Switch>
            </div>
        </div>
    </div>
}

export default Auth;