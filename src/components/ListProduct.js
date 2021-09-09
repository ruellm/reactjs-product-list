import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchState  } from "../actions/actionCreators";
import ProductItem from "./ProductItem";

const ListProduct = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        // we dispatch to fetch the default state first, so selector works
        dispatch(fetchState());
    },[]);

    // we only need the id and the map for this component
    const productItemSelector = useSelector(state=>{
        return state.map(product =>{
            return {
                id: product.id,
                name: product.name
            }
        });
    });

    return(
        <div>
           {
               productItemSelector.length > 0 ?
                    productItemSelector.map(product => <ProductItem key={product.id} {...product}/>) :
                    "List is empty"
           }
        </div>
    );
};

export default ListProduct;