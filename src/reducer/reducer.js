import * as actionTypes from '../actions/actionType'

const initialState = [

    /// Default products
    {
        id: 0,
        price: 2000000,
        name: "Lenovo S540",
        description: "Lenovo Laptop",
        creationDate: "2021-08-19"
    },
    {
        id: 1,
        price: 1000000,
        name: "Macbook Pro 2018",
        description: "An Apple laptop",
        creationDate: "2021-08-16"
    }
];

export let lastProductId = 2;

export function reducer(state = initialState, action)
{
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return [
                ...state,
                {
                    ...action.payload,
                    id: lastProductId++
                }
            ];
        case actionTypes.REMOVE_PRODUCT:
            return state.filter( product => product.id !== action.payload.id );   

        case actionTypes.UPDATE_PRODUCT:{
            return state.map(product => {
                if(product.id == action.payload.id) {
                    return Object.assign({}, action.payload);
                }
                return product;
            });
        }

        case actionTypes.FETCH_STATE: /* Fall through */
        default:
            return state;
    }

}
