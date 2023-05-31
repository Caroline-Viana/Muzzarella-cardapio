import React from 'react'
import styles from './Buscador.module.scss'
import { FaSistrix } from 'react-icons/fa'

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
    return (
        <>
            <div className={styles.buscador}>
                <input
                    value={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                    className={styles.buscador__area}
                    placeholder='Buscar...'
                />
                <FaSistrix size={20} color="#4C4D5E"/>
            </div>
        </>
    )
}

export default Buscador