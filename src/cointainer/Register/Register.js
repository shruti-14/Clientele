import React, { Component } from 'react';
import classes from './Register.module.css';
import Input from '../../commons/UI/Input/Input';

class Register extends Component {
    state = {
        registerForm: {
            userEmail: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
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
        const updatedregisterForm = {
            ...this.state.registerForm
        };
        const updatedFormElement = {
            ...updatedregisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedregisterForm[inputIdentifier] = updatedFormElement;

        this.setState({ registerForm: updatedregisterForm });
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.registerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
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
                {/* <p className={classes.forgetPassword}>Forgot your password?</p> */}
                <button className={classes.signInButton}>Sign up</button>
            </div>
        )
        return <div className={classes.registerContainer}>
            <div className={classes.HeaderSection}>
                <h1 className={classes.signInTitle}>Welcome to Clientele!</h1>
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
export default Register;