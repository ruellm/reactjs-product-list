import React from 'react';
import MenuNav from './MenuNav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ListProduct from './ListProduct';
import ProductEdit from './ProductEdit';
import AddProduct from "./AddProduct";

import "../App.css";

const Parent = ()=>{
    return (
        <Router>
            <div className="mainboard">
                <MenuNav />
                <Switch>
                    <Route path={["/", "/list"]} exact component={ListProduct} />
                    <Route path={"/add"} exact component={AddProduct} />
                    <Route path={"/edit/:id"} exact component={ProductEdit} />
                </Switch>
            </div>
        </Router>
    );
}


export default Parent;