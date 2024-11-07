import React from "react";
import { Link } from "react-router-dom";

import NavButton from "./NavButton";

import es from "../assets/images/es.png"
import en from "../assets/images/en.png"

import { useTranslation } from 'react-i18next';

import '../assets/styles/Navbar.css';

export default function Navbar({changeLanguage}) {

  const { t } = useTranslation();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container-fluid d-flex">
        <div className="d-flex align-items-center justify-content-start col-3 col-lg-5">
          <Link to='/'><h1 className="p-1">Blunted Cup</h1></Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="col-12 align-items-center justify-content-end navbar-nav">
            <NavButton name={t("teams")} to={"/teams"}/>
            <NavButton name={t("schendule")} to={"/schendule"}/>
            <NavButton name={t("standings")} to={"/standings"}/>
            <NavButton name={t("info")} to={"/more"}/>
            <div className="d-flex flex-row">
              <img className="change-lenguage" onClick={() => changeLanguage('en')} src={en} alt="en"></img>
              <img className="change-lenguage" onClick={() => changeLanguage('es')} src={es} alt="es"></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

}
