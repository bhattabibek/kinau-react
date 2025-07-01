import React from 'react'

const Checkout = () => {


  return (
 <div class="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10">

  <div>
    <h2 class="text-2xl font-semibold mb-6">Billing Information</h2>
    <form class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">Full Name</label>
        <input type="text" class="w-full border px-4 py-2 rounded" placeholder="John Doe" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Email Address</label>
        <input type="email" class="w-full border px-4 py-2 rounded" placeholder="john@example.com" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Phone Number</label>
        <input type="tel" class="w-full border px-4 py-2 rounded" placeholder="98XXXXXXXX" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Shipping Address</label>
        <textarea class="w-full border px-4 py-2 rounded" placeholder="Street, City, Zip" rows="3"></textarea>
      </div>
    </form>
  </div>


  <div class="bg-gray-100 p-6 rounded-lg shadow-sm h-fit">
    <h2 class="text-2xl font-semibold mb-6">Order Summary</h2>

    <div class="flex justify-between mb-2">
      <span>Subtotal</span>
      <span>Rs. 8000</span>
    </div>

    <div class="flex justify-between mb-2">
      <span>Shipping</span>
      <span>Free</span>
    </div>


    <div class="my-4">
      <label class="block text-sm font-medium mb-1">Discount Code</label>
      <div class="flex items-center gap-2">
        <input type="text" class="flex-1 px-3 py-2 border rounded" placeholder="Enter code" />
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Apply</button>
      </div>
     
      <p class="text-green-600 text-sm mt-2">Discount Applied: -Rs. 800</p>
    </div>

    <div class="border-t pt-4 flex justify-between text-lg font-semibold">
      <span>Total</span>
      <span>Rs. 7200</span>
    </div>

    <button class="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
      Place Order
    </button>
  </div>
</div>


  );
};


export default Checkout