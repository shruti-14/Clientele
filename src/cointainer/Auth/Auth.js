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
                <h1 className={classes.TextContainerHeading}>{`${isLoginActive ? 'Hello Friend!'
                    :
                    'Welcome back!'}`}</h1>
                <p className={classes.TextContainerContent}>Register yourself and start shopping with us.</p>
                <button className={classes.Button}>Sign Up</button>
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