import styles from './Cardapio.module.scss';
import Buscador from './buscador/Buscador';
import { useState } from 'react';
import Filtros from './filtros/Filtros';
import Ordenador from './ordenador/Ordenador';
import Itens from './itens/Itens';

function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
      </section>
    </>
  );
}

export default Cardapio;
