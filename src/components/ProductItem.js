import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from "../actions/actionCreators";
import { Link } from 'react-router-dom';

import "../App.css"

const ProductItem = (props) => {    
    
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeProduct(id));
    };

    return(
        <div className='product-container'>
            <span>
                {props.id}
            </span>
            <span>
                {props.name}
            </span>
            <span>
            <Link to={`/edit/${props.id}`}>
                <button type='button'> Edit/View </button>
            </Link>
            
            <button onClick={()=>remove(props.id)}>✖</button>
            </span>
        </div>
    );
};

export default ProductItem;