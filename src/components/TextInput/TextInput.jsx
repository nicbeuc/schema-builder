import React from "react"
import { Info } from "react-feather"
import styles from "./TextInput.module.css"

function TextInput({ label, infoLink, ...rest }) {
  const inputId = React.useId()

  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
        {infoLink && (
          <a
            href={infoLink}
            aria-label={`Read the official documentation on the "${label}" property`}
            target='_blank'
            rel='noreferrer'
            className={styles.icon}
          >
            <Info size={16} />
          </a>
        )}
      </div>
      <input
        type='text'
        autoComplete='off'
        aria-autocomplete='none'
        {...rest}
        className={styles.input}
        id={inputId}
      />
    </div>
  )
}

export default TextInput
