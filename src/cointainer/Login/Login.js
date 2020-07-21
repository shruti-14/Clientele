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
                    placeholder: 'Email or Mobile'
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
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedLoginForm[inputIdentifier] = updatedFormElement;

        this.setState({ loginForm: updatedLoginForm });
    }
    openRegisterForm = () => {
        this.props.history.push("/auth/register");
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
                </form>

                <p className={classes.forgetPassword}>Forgot your password?</p>
                <button className={classes.signInButton}>Sign in</button>
                <p className={classes.noAccount}>Don't have an account? <span className={classes.signUpLink} onClick={()=>this.openRegisterForm()}>Create new Account</span></p>
            </div>
        )
        return <div className={classes.LoginContainer}>
            <div className={classes.HeaderSection}>
                <h1 className={classes.signInTitle}>Continue shopping ...</h1>
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
    }
}
export default Login;