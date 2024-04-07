import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
