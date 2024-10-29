import React from "react"
import { useTranslation } from 'react-i18next';
import '../assets/styles/MoreInfo.css'

export default function More() {

  const { t } = useTranslation();

  return (
    <div className="more-info fade-in container d-flex flex-column align-items-start justify-content-start">
      <t className="p-3 m-2">{t('more-info.par-1')}</t>
      <t className="p-3 m-2">{t('more-info.par-2')}</t>
      <t className="p-3 m-2">{t('more-info.par-3')}</t>
    </div>
  )
}