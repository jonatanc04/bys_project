import React from "react";
import '../styles/Navbar.css'
import NavButton from "./NavButton";

export default function Navbar() {

  return (
    <nav className="container-fluid m-0 p-0 d-flex">
      <h1 className="col-6 p-2">Blunted Cup</h1>
      <div className="d-flex align-items-center justify-content-end col-6">
        <NavButton name={"Teams"} to={"/teams"}/>
        <NavButton name={"Schendule"} to={"/teams"}/>
        <NavButton name={"More info..."} to={"/teams"}/>
      </div>
    </nav>
  )

}