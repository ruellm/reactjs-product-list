import * as actionTypes from '../actions/actionType'

const initialState = [

    /// Sample product 
    {
        id: 0,
        price: 2000000,
        name: "Lotto",
        description: "Lotto winning",
        creationDate: "Sep 09 2021"
    },
    {
        id: 1,
        price: 1000000,
        name: "Porsche",
        description: "My new car",
        creationDate: "Dec 09 2021"
    }
];

export function reducer(state = initialState, action)
{

    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return [
                ...state,
                action.payload
            ];
        case actionTypes.REMOVE_PRODUCT:
            return state.filter( product => product.id !== action.payload.id );   

        case actionTypes.FETCH_STATE: /* Fall through */
        default:
            return state;
    }

}
