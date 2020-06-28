import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';
import Toolbar from '../../commons/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../commons/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;