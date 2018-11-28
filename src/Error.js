import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import PlayerInfo from "./PlayerInfo";

class Error extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <div style={{display:"flex", justifyContent: "center"}}>
        <h1>Błędny adres strony</h1>
         </div>
     )
   }
 }

export default Error;