import React, {Component}  from 'react';
import ReactDOM from "react-dom";
import './App.css';
import './scss/main.scss';
import {HashRouter, Route, NavLink, Switch} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <HashRouter>
                <Route exact path="/" component={Home}/>
        </HashRouter>
    );
}

export default App;
