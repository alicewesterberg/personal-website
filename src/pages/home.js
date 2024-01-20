
import React from "react";
import FrontPage from "../components/FrontPage";
import Menu from "../components/Menu";
import About from "./about";

 
const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <FrontPage></FrontPage>
        </div>
    );
};
 
export default Home;