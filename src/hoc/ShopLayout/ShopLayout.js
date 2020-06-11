import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from '../../components/Collection/Collection';
import Layout from '../Layout/Layout';

export default class ShopLayout extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/shop" component={Collection} />
                </Switch>
            </Layout>
        );
    }
}