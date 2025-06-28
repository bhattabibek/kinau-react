import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";  // make sure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />               {/* renders at "/" */}
          <Route path="login" element={<Login />} />       {/* renders at "/login" */}
          <Route path="register" element={<Register />} /> {/* renders at "/register" */}
          <Route path="product" element={<ProductList />} />{/* renders at "/product" */}
          {/* add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
