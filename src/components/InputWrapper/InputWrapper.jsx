import styles from "./InputWrapper.module.css"

function InputWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>
}

export default InputWrapper
