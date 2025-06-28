import React from "react";
import { useDispatch } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { addToCart } from "../features/cart/cartSlice";

const dummyProducts = [
  {
    id: 1,
    name: "Black Hoodie",
    price: 2500,
    rating: 4,
    image: "https://via.placeholder.com/300x200?text=Black+Hoodie",
  },
  {
    id: 2,
    name: "White Sneakers",
    price: 4000,
    rating: 5,
    image: "https://via.placeholder.com/300x200?text=White+Sneakers",
  },
  {
    id: 3,
    name: "Blue Denim Jacket",
    price: 3500,
    rating: 3,
    image: "https://via.placeholder.com/300x200?text=Denim+Jacket",
  },
  {
    id: 4,
    name: "Red Graphic Tee",
    price: 1800,
    rating: 4,
    image: "https://via.placeholder.com/300x200?text=Red+Tee",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Top Picks</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {dummyProducts.map((product) => {
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
            <div
              key={product.id}
              className="m-4 w-60 h-80 text-center border shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex justify-center gap-1 my-1">{stars}</div>
                <h3 className="pb-3 font-medium">Price: NPR {product.price}</h3>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex justify-center items-center gap-2 bg-[#1976D2] hover:bg-[#125aa0] transition text-white px-4 py-2 rounded-2xl mx-auto"
                >
                  <BsCart2 />
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
