import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initializeConnect } from "react-redux/es/components/connect";

const productsSlices = createSlice({
    name: "products",
    initialState: null,
    reducers: {
        setProducts: (state, action) => action.payload
    }
    
})

export const getProductThunk = () => (dispatch) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products"
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err))
}

export const getProductByName = (title = " ", iscategory = false) => dispatch =>{
    let url;
    if(iscategory){
   url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${title}`
    } else {
   url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${title}`
    }
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err))
}

export default productsSlices.reducer
export const {setProducts} = productsSlices.actions







