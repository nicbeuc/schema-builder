import styles from './Footer.module.css'
import { COPYRIGHT_TEXT } from "../../constants"

function Footer() {
  return (
    <footer>
      <div className={styles.inner}>
        <small>{ COPYRIGHT_TEXT }</small>
      </div>
    </footer>
  )
}

export default Footer