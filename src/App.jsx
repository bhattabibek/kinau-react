import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";  // make sure this path is correct
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />               {/* renders at "/" */}
          <Route path="login" element={<Login />} />       {/* renders at "/login" */}
          <Route path="register" element={<Register />} />
          <Route path="product" element={<ProductList />} />
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout" element= {<Checkout/>}/>
          <Route path="dashboard" element = {<Dashboard/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
