import React, { Component } from 'react';
import classes from './Login.module.css';
import Input from '../../commons/UI/Input/Input';

class Login extends Component {
    state = {
        loginForm: {
            userName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }
    inputChangedHandler = (event, inputIdentifier) => {
        console.log('Hi');
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        let form = (
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}

                        />
                    ))}
                    {/* <button to="/" className={classes.loginButton}>Login</button> */}
                </form>
                <p className={classes.forgetPassword}>Forgot your password?</p>
                <button className={classes.signInButton}>Sign in</button>
            </div>
        )
        return <div className={classes.LoginContainer}>
            <div className={classes.HeaderSection}>
                <h1 className={classes.signInTitle}>Sign in to Clientele</h1>
                <div className={classes.socialIconsContainer}>
                    <i className={`fa ${classes.socialIcon} ${classes.gmailIcon}`}>&#xf0d5;</i>
                    <i className={`fa ${classes.socialIcon} ${classes.facebookIcon}`}>&#xf09a;</i>
                </div>

            </div>
            <div className={classes.orContainer}>
                <div className={classes.divider}></div>
                <p>or</p>
                <div className={classes.divider}></div>
            </div>
            {form}
        </div>
        // return <h1>Login</h1>
    }
}
export default Login;