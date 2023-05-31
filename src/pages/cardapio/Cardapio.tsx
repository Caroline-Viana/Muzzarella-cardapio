import React from 'react'
import styles from './Cardapio.module.scss'
import logo from '/src/assets/logo.svg'
import Buscador from './buscador/Buscador'
import { useState } from 'react';
import Filtros from './filtros/Filtros';
import Ordenador from './ordenador/Ordenador';
import Itens from './itens/Itens';

function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <>
      <main>
        <nav className={styles.menu}>
          <img src={logo} alt="logo do Muzzarella" width="50px" />
          Muzzarella
        </nav>
        <header className={styles.header}>
          <h1 className={styles.header__text}>
            A casa com a melhor massa de São Paulo!
          </h1>
        </header>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <Buscador busca={busca} setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro}/>
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
          </div>
          <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
        </section>
      </main>
    </>
  )
}

export default Cardapio
