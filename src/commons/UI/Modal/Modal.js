import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classes from './Modal.module.css';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={() => console.log('hi')} />
                <div
                    className={classes.Modal}>
                    {this.props.children}
                </div>
            </Aux>
        )

    }
}

export default Modal;
