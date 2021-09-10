import React, {useState} from 'react';

import "../App.css";

const ProductForm = (props) => {

    const [state, setState] = useState({
        name: props.name,
        price: props.price,
        creationDate: props.creationDate,
        description: props.description
    });

    const validate = () => {
        if(isNaN(state.price)) {
            alert("Price should be a number");
            return false;
        }
        else if(state.name.length === "") {
            alert("Name cannot be empty");
            return false;
        }
        else if (state.creationDate === undefined) {
            alert("Please select a date");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!validate())
            return;

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
                <div align='center'>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' value={state.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name='price' value={state.price} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Creation Date</label>   
                        <input type="date" name='creationDate' value={state.creationDate} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea cols="17" rows="5" name='description' value={state.description} onChange={handleChange}/>
                    </div>
                    <br/>
                    <div align='center'>
                        <input id="submit" type='submit' value='Submit'/> 
                    </div>
                    <br/>
                </div>
            </form>
          </div>
        </div>
    );
};

export default ProductForm;
