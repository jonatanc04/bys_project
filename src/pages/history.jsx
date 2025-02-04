import { Link } from 'react-router-dom';
import '../assets/styles/History.css';
import { useTranslation } from 'react-i18next';

export default function History() {

  const { t } = useTranslation();

  return (
    <div className="history fade-in container d-flex flex-column align-items-center justify-content-center">
      <Link to="/history/temp-0"><h3 className='m-3'>{t('season')} 0</h3></Link>
    </div>
  )
}