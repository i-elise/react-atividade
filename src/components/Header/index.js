import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'



const Header = (props) => {
  return (
    <header>
        <Link to="/" className={styles.logo}>&#128029;</Link>

        <div className={styles.links}>
          <Link to='/login' className={styles.link}>Login</Link>
          <Link to='/cadastro' className={styles.link}>Cadastrar</Link>
        </div>
        
    </header>
  )
}

export default Header;