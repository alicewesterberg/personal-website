
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Footer from "./components/Footer";


 
function App() {
    return (
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
              path="/contact"
              element={<Contact />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newItems" element={<newItems />} />
      </Routes>
      <Footer></Footer>
  </Router>
    );
}
 
export default App;
