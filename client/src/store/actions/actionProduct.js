import { PRODUCT_FETCHDATA, PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE } from "./actionType";
const url = "http://localhost:3000/products";

export const fetchData = (payload) => {
    return {
        type: PRODUCT_FETCHDATA,
        payload,
    };
}

export const fetchAllData = () => {
    return (dispatch) => {
        fetch(url)
        .then((response) => {
            if(!response){
                throw new Error(response.message);
            }
            return response.json();
        })
        .then((data) => dispatch(fetchData(data)))
        .then((error) => console.log(error))
    }
}