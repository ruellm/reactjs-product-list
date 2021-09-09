import * as actionType from '../actions/actionType'

export const addProduct = payload =>(
{
    type: actionType.ADD_PRODUCT,
    payload
}
);

export const fetchState = () => ({
    type: actionType.FETCH_STATE
});

export const removeProduct = (id) =>({
    type: actionType.REMOVE_PRODUCT,
    payload : {
        id: id
    }
});