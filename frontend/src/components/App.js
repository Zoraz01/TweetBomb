import React , {Component} from "react"
import {render} from "react-dom"
import Header from "./Header";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Log from "./login";
import Bomb from "./BombPage";


function App(){
    return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path = "/" element = {<Header/>}/>
        <Route path = "/logIn" element = {<Log/>}/>
        <Route path = "/Bomb" element = {<Bomb/>}/>
      </Routes>
    </Router>
    </div>
    )
}


const appDiv = document.getElementById("app");
render(<App/>,appDiv);
