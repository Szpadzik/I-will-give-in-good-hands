import React from "react";
import {HashRouter, NavLink, Switch} from "react-router-dom";
//import Link from "react-scroll;


function Header() {

    return (
        <HashRouter>
            <div className="banner">
                <div className="photo"></div>
                <div className="menu">
                    <nav className="up_nav">
                        <NavLink to="/login" className="nav">Zaloguj</NavLink>
                        <NavLink to="/register" className="nav">Załóż konto</NavLink>
                    </nav>
                    ,
                    <nav className="bottom_nav">
                        <NavLink to="/header/login" className="nav">Start</NavLink>
                        <NavLink to="/header/register" className="nav">O co chodzi?</NavLink>
                        <NavLink to="/header/login" className="nav">O nas</NavLink>
                        <NavLink to="/header/register" className="nav">Fundacja i organizacje</NavLink>
                        <NavLink to="/header/register" className="nav">Kontakt</NavLink>
                    </nav>
                    <div className="welcome">
                        <div>
                            <h2> Zacznij pomagać! <br></br>
                                Oddaj niechciane rzeczy w zaufane ręce.</h2>
                            <div className="ornament"></div>
                            <button className="btn">ODDAJ RZECZY</button>
                            <button className="btn">ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default Header;