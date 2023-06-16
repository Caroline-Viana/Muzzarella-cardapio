import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <img src={logo} alt="" className={styles.footer__img}/>
        <h1 className={styles.footer__titutlo}>Muzzarella</h1>
      </footer>
    </div>
  );
}

export default Footer;