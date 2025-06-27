import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCart2 } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';

import {
  fetchProducts,
  selectProducts,
  selectLoading,
  selectError,
} from '../features/products/productsSlice';

import { addToCart } from '../features/cart/cartSlice';  // import action

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <FaRegStar
        key={i}
        className={`inline-block ${
          i < product.rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="m-4 w-60 h-80 text-center border shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="flex justify-center gap-1 my-1">{stars}</div>
        <h3 className="pb-3 font-medium">Price NPR {product.price}</h3>
        <button
          onClick={handleAddToCart}
          className="flex justify-center items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl mx-auto"
        >
          <BsCart2 />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load products.</p>
    );

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-6 mb-8">Top Picks</h1>
      {!loading && products.length === 0 && (
        <p className="text-center">No products found.</p>
      )}
      <div className="flex justify-center items-center flex-col md:flex-row md:flex-wrap lg:flex">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
