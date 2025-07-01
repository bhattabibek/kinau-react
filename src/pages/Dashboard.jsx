import React from 'react'

const Dashboard = () => {
  return (
<div class="min-h-screen flex bg-gray-100">
 
  <aside class="w-64 bg-white shadow-md hidden md:block">
    <div class="p-6 font-bold text-xl border-b">Dashboard</div>
    <nav class="p-6 space-y-2">
      <a href="#" class="block py-2 px-4 rounded bg-blue-600 text-white font-semibold">Home</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-blue-100">Products</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-blue-100">Orders</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-blue-100">Users</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-blue-100">Settings</a>
    </nav>
  </aside>

 
  <div class="flex-1 flex flex-col">
  
    <header class="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Dashboard Home</h1>
      <div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Logout</button>
      </div>
    </header>

   
    <main class="p-6 overflow-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       
        <div class="bg-white p-6 rounded shadow">
          <h2 class="text-lg font-semibold mb-2">Total Sales</h2>
          <p class="text-3xl font-bold">Rs. 1,25,000</p>
        </div>
       
        <div class="bg-white p-6 rounded shadow">
          <h2 class="text-lg font-semibold mb-2">Orders</h2>
          <p class="text-3xl font-bold">320</p>
        </div>
        
        <div class="bg-white p-6 rounded shadow">
          <h2 class="text-lg font-semibold mb-2">Products</h2>
          <p class="text-3xl font-bold">54</p>
        </div>
   
        <div class="bg-white p-6 rounded shadow">
          <h2 class="text-lg font-semibold mb-2">Users</h2>
          <p class="text-3xl font-bold">1,200</p>
        </div>
      </div>

    
      <section class="mt-8 bg-white p-6 rounded shadow">
        <h2 class="text-xl font-semibold mb-4">Recent Orders</h2>
        <table class="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2 text-left">Order ID</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Customer</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">#1001</td>
              <td class="border border-gray-300 px-4 py-2">Bibek Bhatta</td>
              <td class="border border-gray-300 px-4 py-2">2025-06-30</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Completed</td>
              <td class="border border-gray-300 px-4 py-2">Rs. 12,000</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">#1002</td>
              <td class="border border-gray-300 px-4 py-2">Sita Sharma</td>
              <td class="border border-gray-300 px-4 py-2">2025-06-29</td>
              <td class="border border-gray-300 px-4 py-2 text-yellow-600 font-semibold">Pending</td>
              <td class="border border-gray-300 px-4 py-2">Rs. 5,500</td>
            </tr>
           
          </tbody>
        </table>
      </section>
    </main>
  </div>
</div>

  )
}

export default Dashboard