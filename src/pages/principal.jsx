import React from "react"
import { useTranslation } from 'react-i18next';

import "../styles/Principal.css"
import bronze from '../assets/images/bronze.png'
import arrow from '../assets/images/arrow.png'
import gold from '../assets/images/gold.png'

export default function Principal() {

  const { t } = useTranslation();

  return (
    <div className="principal fade-in container d-flex flex-column align-items-center justify-content-center">
      <h2 className="m-4">{t('welcome')}</h2>
      <div className="text-container col-12 m-3 d-flex">
        <t>{t('description')}</t>
      </div>
      <div className="col-12 m-2 d-flex flex-row align-items-center justify-content-center">
        <div className="col-2 d-flex flex-row align-items-center justify-content-center">
          <img src={bronze} alt='bronze'></img>
        </div>
        <div className="col-2 d-flex flex-row align-items-center justify-content-center">
          <img className="arrow-st" src={arrow} alt='arrow'></img>
        </div>
        <div className="col-2 d-flex flex-row align-items-center justify-content-center">
          <img src={gold} alt='gold'></img>
        </div>
      </div>
      <div className="text-container col-12 m-3 d-flex">
        <t>{t('description2')}</t>
      </div>
    </div>
  )
}