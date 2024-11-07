import React from "react"
import { useTranslation } from 'react-i18next';
import '../assets/styles/MoreInfo.css'

export default function More() {

  const { t } = useTranslation();

  return (
    <div className="more-info fade-in container d-flex flex-column align-items-start justify-content-start">
      <h4 className="p-3 m-2">{t('more-info.par-1')}</h4>
      <h4 className="p-3 m-2">{t('more-info.par-2')}</h4>
      <h4 className="p-3 m-2">{t('more-info.par-4')}</h4>
      <h4 className="p-3 m-2">{t('more-info.par-3')}</h4>
      <h4 className="p-3 m-2">{t('more-info.par-5')}</h4>
      <h4 className="p-3 m-2">{t('more-info.par-6')}</h4>
      <h4 className="p-3 m-2">{t('more-info.par-7')}</h4>
    </div>
  )
}