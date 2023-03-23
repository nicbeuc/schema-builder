import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <div className={styles.inner}>
        <h1 className={styles.title}>schema builder</h1>
      </div>
    </header>
  )
}

export default Header