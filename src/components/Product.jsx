import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 3000,
    image: "/headphones.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 4500,
    image: "/speaker.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 7000,
    image: "/watch.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Noise Cancelling Earbuds",
    price: 3500,
    image: "/earbuds.jpg",
    rating: 4,
  },
];

// Product Card Component for reusability
const ProductCard = ({ product }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <FaRegStar
        key={i}
        className={`inline-block ${
          i < product.rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <div className="m-4 w-60 h-80 text-center border shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="flex justify-center gap-1 my-1">{stars}</div>
        <h3 className="pb-3 font-medium">Price NPR {product.price}</h3>
        <button className="flex justify-center items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl mx-auto">
          <BsCart2 />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-6 mb-8">Top Picks</h1>
      <div className="flex justify-center items-center flex-col md:flex-row md:flex-wrap lg:flex">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
