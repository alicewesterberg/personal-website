
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Paintings from "./pages/paintings";


 
function App() {
    return (
      <Router>
      <Navbar />
      <Menu></Menu>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
              path="/contact"
              element={<Contact />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newItems" element={<newItems />} />
          <Route path ="/paintings" element={<Paintings />}/>
      </Routes>
      <Footer></Footer>
  </Router>
    );
}
 
export default App;
