import React, {createRef, useEffect, useState} from 'react';

import "../App.css";

const ProductForm = (props) => {

    const [state, setState] = useState({
        name: props.name,
        price: props.price,
        creationDate: props.creationDate,
        description: props.description
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isNaN(state.price)) {
            alert("Price should be a number");
            return;
        }
        else if(state.name.length === "") {
            alert("Name cannot be empty");
            return;
        }
        else if (state.creationDate == undefined) {
            alert("Please select a date");
            return;
        }

        const payload = {
            name : state.name,
            price : state.price,
            creationDate : state.creationDate,
            description : state.description
        };

        props.onSubmit(payload);
    };


    const handleChange = (event) =>{
        const value = event.target.value;

        setState({
            ...state,
            [event.target.name] : value
        })
    };

    return(
        <div>
         <div>
            <form onSubmit={handleSubmit}>
                <div className='block'>
                    <label>Name</label>
                    <input type="text" name='name' value={state.name} onChange={handleChange}/>
                </div>
                <div className='block'>
                    <label>Price</label>
                    <input type="text" name='price' value={state.price} onChange={handleChange}/>
                </div>
                <div className='block'>
                    <label>Creation Date</label>   
                    <input type="date" name='creationDate' value={state.creationDate} onChange={handleChange}/>
                </div>
                <div className='block'>
                    <label>Description</label>
                    <textarea type="text" name='description' value={state.description} onChange={handleChange}/>
                </div>
                <div className='block'>
                   <input type='submit' value='Submit'/> 
                </div>
            </form>
          </div>
        </div>
    );
};

//TODO: props property

export default ProductForm;
