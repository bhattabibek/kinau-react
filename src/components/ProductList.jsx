import React, { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import {useSelector,useDispatch} from "react-redux";

import { fetchProducts } from "../features/products/ProductsSlice";


const ProductList = () => {
  const dispatch = useDispatch();
  const {items:products,loading,error} = useSelector(
    (state)=>state.products
  )

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
 
 

  if (loading) return <div className="text-center p-4">Loading Products...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    // <>
    //   <h2 className="text-2xl font-bold text-center py-4">Product List</h2>
    //   <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //     {products.map((product,id) => (
    //       <div
    //         key={product._id}
    //         className="w-60 h-80 text-center border shadow-2xl flex flex-col justify-between p-4"
    //       >
    //         <img
    //           src={product.imageUrl || "/headphones.jpg"}
    //           alt={product.name}
    //           className="w-full h-40 object-cover"
    //         />
    //         <h2 className="pt-3 font-semibold">{product.name}</h2>
    //         <h3 className="pb-3">Price NPR {product.price}</h3>
    //         <div className="flex justify-center">
    //           <button className="flex items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl">
    //             <BsCart2 />
    //             Add to Cart
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </>
    <>
    <h1>Product List Page</h1></>
  );
};

export default ProductList;
