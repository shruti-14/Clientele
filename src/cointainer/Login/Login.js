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
        loading: false,
        loginTabActive: true
    }
    inputChangedHandler = (event, inputIdentifier) => {
        console.log('Hi');
    }
    loginTabClicked = () => {
        this.setState({ loginTabActive: true });
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
            <form>
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
        )
        return <div className={classes.LoginContainer}>

            <div className={classes.LoginContent}>
                <div className={classes.tabsContainer}>
                    <div className={classes.tabs} onClick={() => this.loginTabClicked()}>Login</div>
                    <div className={classes.tabs}>Register</div>
                </div>
                {form}
            </div>
        </div>
    }
}
export default Login;