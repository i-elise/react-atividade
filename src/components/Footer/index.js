import React from 'react'
import styles from "./Footer.module.css"

const Footer = (props) => {
  return (
    <footer>Criado por {props.author} &copy;</footer>
  )
}

export default Footer;