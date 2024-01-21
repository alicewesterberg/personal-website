import React from "react";
import logo from '../assets/img/IMG_0408.jpeg';

function Aboutme(){
    return(

        <nav class="frontpage background">
            <div class="text">
                <h2>
                    Hello! 
                </h2>
                <p1>
                    My name is Alice Westerberg and I am the owner of this page. I constantly engage in different projects such as sewing clothes
                    painting, photography, knitting and much more. My main project right now is pursing a master in Engineering and Computer Science and I have
                    developed this webpage all on my own. Therefor there might be bugs, or I might not have the time to update frequently at all times.
                </p1>
            </div>
            <div class= "bild">
                <img src={logo} alt="Logo"/>
            </div>
        </nav>
              
    )
}
export default Aboutme;