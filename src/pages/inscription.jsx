import { useTranslation } from 'react-i18next';
import '../assets/styles/Inscriptions.css';

export default function Inscription() {

  const { t } = useTranslation();

  return (
    <div className="inscription fade-in container d-flex flex-column align-items-center justify-content-center">
      <h3 className='p-3 m-3'>{t('inscriptions_no')}</h3>
    </div>
  )
}