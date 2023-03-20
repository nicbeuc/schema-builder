import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main></main>
      <Footer />
    </div>
  )
}

export default App
