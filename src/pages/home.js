
import React from "react";
import FrontPage from "../components/FrontPage";
import Menu from "../components/Menu";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

 
const Home = () => {
    return (
        <div>
            <FrontPage></FrontPage>
        </div>
    );
};
 
export default Home;