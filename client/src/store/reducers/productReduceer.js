import { PRODUCT_FETCHDATA } from "../actions/actionType";

const initialProductState = {
    products: [],
}

function productReducer(state = initialProductState, action) {
    switch (action.type) {
        case PRODUCT_FETCHDATA:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state;
    }
}

export default productReducer;