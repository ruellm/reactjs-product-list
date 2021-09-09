import React, {Component} from 'react';
import MenuNav from './MenuNav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ListProduct from './ListProduct';
import ProductEdit from './ProductEdit';

const Parent = ()=>{
    return (
        <Router>
            <div>
                <MenuNav />
                <Switch>
                    <Route path={["/", "/list"]} exact component={ListProduct} />
                    <Route path={["/add", "/add/:id"]} exact component={ProductEdit} />
                </Switch>
            </div>
        </Router>
    );
}


export default Parent;