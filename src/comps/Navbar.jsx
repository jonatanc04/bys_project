import React from "react";
import { Link } from "react-router-dom";

import NavButton from "./NavButton";

import es from "../assets/images/es.png";
import en from "../assets/images/en.png";

import { useTranslation } from 'react-i18next';

import '../assets/styles/Navbar.css';

export default function Navbar({ changeLanguage }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid d-flex">
        <div className="d-flex align-items-center justify-content-start col-3 col-lg-5">
          <Link to="/"><h1 className="p-1">Blunted Cup</h1></Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="col-12 align-items-center justify-content-end navbar-nav">
            <NavButton name={t("teams")} to={"/teams"} />
            <NavButton name={t("schendule")} to={"/schendule"} />
            <NavButton name={t("standings")} to={"/standings"} />

            <div className="navButton p-2 m-2 col-5 col-lg-2 d-flex justify-content-center nav-item dropdown">
              <Link className="nav-link dropdown-toggle m-0 p-0" to="#" id="infoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <t>{t("info")}</t>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="infoDropdown">
                <li><Link className="dropdown-item" to="/more">{t("rules")}</Link></li>
                <li><Link className="dropdown-item" to="/registration">{t("registration")}</Link></li>
                <li><Link className="dropdown-item" to="/honours">{t("honours")}</Link></li>
                <li><Link className="dropdown-item" to="/history">{t("history")}</Link></li>
                <li><Link className="dropdown-item" to="/about">{t("about_us")}</Link></li>
              </ul>
            </div>
            <div className="d-flex flex-row">
              <img className="change-lenguage" onClick={() => changeLanguage('en')} src={en} alt="en" />
              <img className="change-lenguage" onClick={() => changeLanguage('es')} src={es} alt="es" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
