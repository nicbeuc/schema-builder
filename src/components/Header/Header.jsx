import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <h1>Schema Builder</h1>
      </div>
    </header>
  )
}

export default Header