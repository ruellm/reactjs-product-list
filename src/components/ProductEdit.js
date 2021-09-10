import React, {useEffect, useState} from 'react';
import { useStore, useDispatch } from 'react-redux';
import { updateProduct } from '../actions/actionCreators';
import ProductForm from "./ProductForm";

import "../App.css";

const ProductEdit = ({match}) => {

    const dispatch = useDispatch();
    const store = useStore();

    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(()=>{
        let p = store.getState().find(product => {
            return (product.id === match.params.id);
        });
        
        setCurrentProduct(p);
    },[]);

    const handleUpdate = (payload) => {
        payload.id = match.params.id;
        dispatch(updateProduct(payload));
    };

    return(
        <div>
            <h2 align='center'>Edit Product # {match.params.id}</h2>

            { currentProduct ?
                    <ProductForm onSubmit={handleUpdate} {...currentProduct}/>:
                    "Product Id not found"}

        </div>
    );
};

export default ProductEdit;
