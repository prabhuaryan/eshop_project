import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
