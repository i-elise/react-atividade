import React from 'react'
import Card from "../Card"
import styles from './Content.module.css'

const Content = () => {
  return (
    <main>
        <Card image="assets/jonathan-cropped.png" name="Jonathan Joestar" />
        <Card image="assets/joseph-cropped.png" name="Joseph Joestar" />
        <Card image="assets/jotaro-cropped.png" name="Jotaro Kujo" />
        <Card image="assets/josuke-cropped.png" name="Josuke Higashikata" />
        <Card image="assets/giorno-cropped.png" name="Giorno Giovanna" />
        <Card image="assets/jolyne-cropped.png" name="Jolyne Cujoh" />
    </main>
  )
}

export default Content;