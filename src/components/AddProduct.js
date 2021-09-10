import React, {createRef, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/actionCreators';
import ProductForm from "./ProductForm";

import "../App.css";

const AddProduct = ({match}) => {
    
    const dispatch = useDispatch();

    const handleAdd = (payload) => {
        dispatch(addProduct(payload));
    };

    return(
        <div>
            <h1>Add Product</h1>
            <ProductForm onSubmit={handleAdd}/>
        </div>
    );
};

export default AddProduct;
