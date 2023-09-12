import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.image} />
        <h2>{props.name}</h2>
    </div>
  )
}

export default Card;