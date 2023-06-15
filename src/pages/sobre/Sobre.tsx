import React from 'react';
import styles from './Sobre.module.scss';
import casa from '../../assets/casa.png';
import massa1 from '../../assets/massa1.png';
import massa2 from '../../assets/massa2.png';

const imagens = [massa1, massa2];

function Sobre() {
  return (
    <>
      <section className={styles.sobre}>
        <h3 className={styles.sobre__titulo}>Sobre Nós</h3>
        <div className={styles.sobre__conteudo}>
          <img src={casa} alt="Casa Muzzarella" className={styles.sobre__img}/>
          <div className={styles.sobre__texto}>
            <p>
            Nós da Muzzarella oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
            </p>
            <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
            </p>
            <p>
            Para acompanhar as massas italianas, Muzzarella possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
            </p>
          </div>
        </div>
        <div className={styles.imagens}>
          {imagens.map((imagem, index) => (
            <div key={index} className={styles.imagens__imagem}>
              <img src={imagem} alt="Imagem de massa" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Sobre;