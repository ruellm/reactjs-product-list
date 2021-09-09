import React, {createRef, useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../actions/actionCreators';

import "../App.css";

const ProductEdit = ({match}) => {

    const idField = createRef();
    const nameField = createRef();
    const priceField = createRef();
    const dateField = createRef();
    const descField = createRef();

    const dispatch = useDispatch();

    const [formName, setFormName] = useState("");
    useEffect(()=>{
        setFormName((match.params.id)? "View/Edit Product": "Add new product");
       
        // TODO: handle situation if edit
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: error checking if empty
        // handle update or add

        const payload = {
            id : idField.current.value,
            name: nameField.current.value,
            price: priceField.current.value,
            date : dateField.current.value.toString(),
            description: descField.current.value
        };

        dispatch(addProduct(payload));
    };

    return(
        <div>
         <h1>{formName}</h1>
         <div>
            <form onSubmit={handleSubmit}>
                <div className='block'>
                    <label>Id</label>
                    <input type="text" ref={idField} value={100}/>
                </div>
                <div className='block'>
                    <label>Name</label>
                    <input type="text" ref={nameField}/>
                </div>
                <div className='block'>
                    <label>Price</label>
                    <input type="text" ref={priceField}/>
                </div>
                <div className='block'>
                    <label>Creation Date</label>
                    <input type="date" ref={dateField}/>
                </div>
                <div className='block'>
                    <label>Description</label>
                    <textarea type="text" ref={descField}/>
                </div>
                <div className='block'>
                   <input type='submit' value={(match.params.id)?'Update Product': 'Add Product'}/> 
                </div>
            </form>
          </div>
        </div>
    );
};

export default ProductEdit;
