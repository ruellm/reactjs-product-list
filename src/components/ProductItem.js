import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from "../actions/actionCreators";

const ProductItem = (props) => {    
    
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeProduct(id));
    };

    return(
        <div>
            <div>
                {props.id} {props.name}
                <button onClick={()=>remove(props.id)}>✖</button>
            </div>
        
            <hr />
        </div>
    );
};

export default ProductItem;