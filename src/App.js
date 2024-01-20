
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer";
 
function App() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Menu></Menu>
        <FrontPage></FrontPage>
        <Footer></Footer>
      </div>
    );
}
 
export default App;
