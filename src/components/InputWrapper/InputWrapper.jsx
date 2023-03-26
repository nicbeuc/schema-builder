import styles from "./InputWrapper.module.css"

function InputWrapper({ children }) {
  return (
    <div autoComplete='off' className={styles.wrapper}>
      {children}
    </div>
  )
}

export default InputWrapper
