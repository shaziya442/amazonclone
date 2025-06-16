import "./App.css";
import Navbar from "./components/navbar";
import HomeScreen from "./screen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import Product from "./screen/Products/Product.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./screen/Cart/Cart.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
