import React from 'react'

const Product = () => {
  return (
<div class="max-w-7xl mx-auto p-6 space-y-16">

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    <div class="rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://via.placeholder.com/600x600"
        alt="Product Image"
        class="w-full h-full object-cover"
      />
    </div>


    <div class="flex flex-col justify-between">
      <div>
        <h1 class="text-4xl font-extrabold mb-4">Amazing Gym T-Shirt</h1>
        <p class="text-gray-600 mb-6 leading-relaxed">
          High-quality gym t-shirt made with breathable fabric. Perfect for
          workouts and casual wear. Available in multiple colors and sizes.
        </p>

        <div class="text-3xl font-bold mb-6 text-blue-600">Rs. 3500</div>

      
        <div class="flex items-center space-x-6 mb-8">
          <label for="quantity" class="font-medium text-lg">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value="1"
            class="w-20 border rounded px-3 py-2 text-center focus:outline-blue-500"
            readonly
          />
        </div>

       
        <button
          class="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>

 
  <section>
    <h2 class="text-3xl font-bold mb-8">Recommended Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Product 1"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">Workout Shorts</h3>
          <p class="text-blue-600 font-bold">Rs. 2000</p>
        </div>
      </div>

     
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Product 2"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">Running Shoes</h3>
          <p class="text-blue-600 font-bold">Rs. 5500</p>
        </div>
      </div>

    
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Product 3"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">Fitness Gloves</h3>
          <p class="text-blue-600 font-bold">Rs. 1200</p>
        </div>
      </div>

  
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Product 4"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">Water Bottle</h3>
          <p class="text-blue-600 font-bold">Rs. 800</p>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Product