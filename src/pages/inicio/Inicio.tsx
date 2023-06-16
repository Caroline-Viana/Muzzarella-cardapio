import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from '../../types/Prato';

function Inicio() {
  const navigate = useNavigate();
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  function redirecionarParaDetalhes(prato: Prato){
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <>
      <section className={styles.container}>
        <h3 className={styles.titulo}>
          Recomendações da cozinha
        </h3>
        <div className={styles.recomendados}>
          {pratosRecomendados.map(item => (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__img}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button 
                className={styles.recomendado__botao}
                onClick={() => redirecionarParaDetalhes(item)}
              >
              Ver mais
              </button>
            </div>
          ))}
        </div>
        <h3 className={styles.titulo}>Nossa casa</h3>
        <div className={styles.nossaCasa}>
          <img src={nossaCasa} alt="Casa Muzzarella" className={styles.nossaCasa__img}/>
          <div className={styles.nossaCasa__endereco}>
            Rua Vergueiro, 3126 <br/><br/> Vila Mariana - SP
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;