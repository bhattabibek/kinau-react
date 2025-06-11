import React from 'react'
import {useState,useEffect} from "react";
import {  fetchProducts } from '../api/product.api';
import {Link} from 'react-router-dom';

const ProductList = () => {
  const [products,setProducts] = useState([]);

  const loadProducts = async ()=>{
    const res = await fetchProducts();
    setProducts(res.data)
  }
  useEffect(()=>{
    loadProducts();
  },[])

  return (
  <>
 <div>
  <ul>
    {products.map(product => (
      <li key={product._id}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </li>
    ))}
  </ul>
  <Link to="/products/create" >Add Product</Link>
</div>
  </>
  )
}

export default ProductList