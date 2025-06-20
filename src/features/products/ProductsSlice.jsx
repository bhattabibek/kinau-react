import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
  const response = await axios.get('http://localhost:5000/api/products');
  return response.data;

})

const  productsSlice= createSlice({
  name:"products",
  initialState:{
    items:[],
    loading:false,
    error:false,
  },
  reducers:{},
  extraReducers: (builder) =>{
    builder
    .addCase (fetchProducts.pending,(state)=>{
      state.loading = true;
      state.error = false;
    })
    .addCase (fetchProducts.fulfilled, (state,action)=>{
      state.items=action.payload,
      state.loading = false
    })
    .addCase (fetchProducts.rejected, (state,action)=>{
      state.loading=false;
      state.error= true;
    })
  }
})

export default productsSlice.reducer;