import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Main from '../Main'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <div className='screens'>
          <section className='screen'>
            <div className='screen__heading'>
              <h2>Metadata</h2>
            </div>
            <div className='inputs'>
              <input type='text' />
            </div>
            <div className='controls'>
              <button>Next</button>
            </div>
          </section>
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default App
