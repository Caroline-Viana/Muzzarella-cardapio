import styles from './Menu.module.scss';
import logo from '/src/assets/logo.svg';
import { Link } from 'react-router-dom';

function Menu() {
  const rotas = [{
    labal: 'Início',
    to: '/'
  }, {
    labal: 'Cardápio',
    to: '/cardapio'
  }, {
    labal: 'Sobre',
    to: '/sobre'
  }];
  return (
    <>
      <nav className={styles.menu}>
        <div className={styles.logo}>
          <img src={logo} alt="logo do Muzzarella" width="50px" />
          <h1 className={styles.logo__titulo}>Muzzarella</h1>
        </div>
        <ul className={styles.list}>
          {rotas.map((rota, index) => (
            <li key={index} className={styles.list__link}>
              <Link to={rota.to}>
                {rota.labal}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Menu;