import React from 'react'
import styles from './Header.module.css'



const Header = (props) => {
  return (
    <header>
        <a href="/" className={styles.logo}><img src={props.logo}/></a>
    </header>
  )
}

export default Header;