import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Gym T-shirt",
      price: 1500,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Workout Shoes",
      price: 5000,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
  ];

  const Cart = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-500">Rs. {item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 px-2 py-1 border rounded"
                      readOnly
                    />
                    <button className="text-red-500 hover:underline text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border p-6 rounded-lg bg-gray-50">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {total}</span>
              </div>
              <div className="flex justify-between mb-4 text-sm text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
};

export default Cart;
