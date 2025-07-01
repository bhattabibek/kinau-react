import React from "react";

const Cart = () => {
  


   

    return (
     
     <div class="max-w-6xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>


  <div class="space-y-6">

    <div class="flex items-center justify-between border p-4 rounded-lg">
      <div class="flex items-center space-x-4">
        <img src="https://via.placeholder.com/80" alt="Product" class="w-20 h-20 object-cover rounded" />
        <div>
          <h2 class="text-lg font-semibold">Product Name 1</h2>
          <p class="text-gray-500">Rs. 1500</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <input type="number" value="2" min="1" class="w-16 px-2 py-1 border rounded" readonly />
        <button class="text-red-600 hover:underline text-sm">Remove</button>
      </div>
    </div>

   
    <div class="flex items-center justify-between border p-4 rounded-lg">
      <div class="flex items-center space-x-4">
        <img src="https://via.placeholder.com/80" alt="Product" class="w-20 h-20 object-cover rounded" />
        <div>
          <h2 class="text-lg font-semibold">Product Name 2</h2>
          <p class="text-gray-500">Rs. 5000</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <input type="number" value="1" min="1" class="w-16 px-2 py-1 border rounded" readonly />
        <button class="text-red-600 hover:underline text-sm">Remove</button>
      </div>
    </div>
  </div>


  <div class="mt-10 max-w-md border p-6 rounded-lg bg-gray-50">
    <h2 class="text-xl font-bold mb-6">Summary</h2>

    <div class="flex justify-between mb-2">
      <span>Subtotal</span>
      <span>Rs. 8000</span>
    </div>
    <div class="flex justify-between mb-4 text-sm text-gray-500">
      <span>Shipping</span>
      <span>Free</span>
    </div>
    <div class="border-t pt-4 flex justify-between font-semibold text-lg">
      <span>Total</span>
      <span>Rs. 8000</span>
    </div>

    <button class="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
      Proceed to Checkout
    </button>
  </div>
</div>

    );
  };


export default Cart;
