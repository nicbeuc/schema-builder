import React from "react"
import styles from "./TextInput.module.css"

function TextInput({ id, label, ...rest }) {
  const generatedId = React.useId()
  const inputId = id || generatedId

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input className={styles.input} id={inputId} {...rest} />
    </div>
  )
}

export default TextInput
