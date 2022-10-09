import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./style/input.scss";
import { ThemeContext } from './providers/themeProvider.jsx'


ReactDom.render(
    <>
       <ThemeContext.Provider value={{foo: 'bar'}}>
         <App />
       </ThemeContext.Provider>
           
    
    </>
     , 
    document.getElementById("root"));
