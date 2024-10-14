import React from "react";
import { Link } from "react-router-dom";

import NavButton from "./NavButton";
import logo from "../assets/images/logo.png";
import es from "../assets/images/es.png"
import en from "../assets/images/en.png"

import '../assets/styles/Navbar.css';

export default function Navbar({changeLanguage}) {

  return (
    <nav className="container-fluid m-0 p-0 d-flex">
      <div className="d-flex align-items-center justify-content-start col-5">
        <Link to='/'><h1 className="p-2">Blunted Cup</h1></Link>
      </div>
      <div className="d-flex align-items-center justify-content-center col-2">
        <img className="navbar-logo" src={logo} alt="logo"></img>
      </div>
      <div className="d-flex align-items-center justify-content-end col-5">
        <NavButton name={"Teams"} to={"/teams"}/>
        <NavButton name={"Schendule"} to={"/schendule"}/>
        <NavButton name={"Standings"} to={"/standings"}/>
        <NavButton name={"More info..."} to={"/more"}/>
        <img className="change-lenguage" onClick={() => changeLanguage('en')} src={en} alt="en"></img>
        <img className="change-lenguage" onClick={() => changeLanguage('es')} src={es} alt="es"></img>
      </div>
    </nav>
  )

}