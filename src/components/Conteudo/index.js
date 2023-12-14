import React from "react";
import styles from "./Conteudo.module.css";
import { useState } from 'react'

export default function Conteudo() {

  const [favoritos, setFavoritos] = useState([]);

  const [favorito, setFavorito] = useState({ nome: "", url: "" });

  function handleURL(e) {
    return setFavorito({ ...favorito, favorito, url: e.target.value });
  }

  function handleNome(e) {
    return setFavorito({ ...favorito, nome: e.target.value });
  }

  return (
    <div id="div-favorito" className={styles.conteudo}>
      <div className={styles.formConteudo}>
        <h1>Adicione seu favorito &#11088;</h1>
        <form>
          <label htmlFor="favorito_nome">Nome</label>
          <input type="text" onChange={(e) => handleNome(e)} />
          <label htmlFor="favorito_url">URL</label>
          <input type="text" onChange={(e) => handleURL(e)} /> <br />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
}
