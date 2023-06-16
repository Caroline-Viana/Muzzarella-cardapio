import styles from './NotFound.module.scss';
import error from '../../assets/404 Error-pana.png';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <h3 className={styles.notFound__texto}>Página não encontrada!</h3>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <div className={styles.notFound__imagem}>
        <img src={error} alt="Imagem do erro 404" className={styles.notFound__img}/>
      </div>
    </div>
  );
}

export default NotFound;