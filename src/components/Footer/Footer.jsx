import styles from './Footer.module.css'
import { COPYRIGHT_TEXT } from "../../constants"

function Footer() {
  return (
    <footer className={styles.footer}>
      <small>{ COPYRIGHT_TEXT }</small>
    </footer>
  )
}

export default Footer