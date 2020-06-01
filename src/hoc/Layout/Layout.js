import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../commons/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../commons/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;