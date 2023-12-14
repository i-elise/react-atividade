import React from 'react'
import Header from '../../components/Header'
import Conteudo from '../../components/Conteudo2';
import Footer from '../../components/Footer';
const Principal = () => {
  return (
       // /*O React substitui className por class pq class é palavra reservada do JS*/
  <>
  <Header />
  <Conteudo/>
  <Footer author='Iara Elise' />
  </>
  )
}

export default Principal
