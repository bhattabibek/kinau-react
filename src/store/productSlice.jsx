import React from 'react'
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { fetchProducts } from '../api/product.api'
export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async ()=>{
    const response = await fetchProducts();
    return response.data;
  }
    )
const productSlice =createSlice({
  name:"products",
  initialState:{
    items:[],
    status:"idle",
    error:null,
  },
  reducers:{},
  builder
  .addCase(loadProducts.pending,(state)=>{
    state.status = 'loading';

  })
  .addCase (loadProducts.fullfilled,(state)=>{
    state.status = "succedded";
    state.items = isAction.payload;
  })
  .addCase(loadProducts.rejected,(state,action)=>{
state.status= "failed";
state.error = action.error.message;
  })


});


export default productSlice.reducer