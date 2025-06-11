import React, { useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";

// Fake product data
const fakeProducts = [
  {
    _id: "1",
    name: "Wireless Headphones",
    price: 3000,
    imageUrl: "/headphones.jpg",
  },
  {
    _id: "2",
    name: "Bluetooth Speaker",
    price: 4500,
    imageUrl: "/speaker.jpg",
  },
  {
    _id: "3",
    name: "Smart Watch",
    price: 5200,
    imageUrl: "/smartwatch.jpg",
  },
  {
    _id: "4",
    name: "Gaming Mouse",
    price: 1800,
    imageUrl: "/mouse.jpg",
  },
  {
    _id: "5",
    name: "Mechanical Keyboard",
    price: 4200,
    imageUrl: "/keyboard.jpg",
  },
  {
    _id: "6",
    name: "USB-C Power Bank",
    price: 3600,
    imageUrl: "/powerbank.jpg",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setProducts(fakeProducts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center p-4">Loading Products...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <>
      <h2 className="text-2xl font-bold text-center py-4">Product List</h2>
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-60 h-80 text-center border shadow-2xl flex flex-col justify-between p-4"
          >
            <img
              src={product.imageUrl || "/headphones.jpg"}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="pt-3 font-semibold">{product.name}</h2>
            <h3 className="pb-3">Price NPR {product.price}</h3>
            <div className="flex justify-center">
              <button className="flex items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl">
                <BsCart2 />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
