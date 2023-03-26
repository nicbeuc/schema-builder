import React from "react"
import Icon from "../Icon"
import styles from "./TextInput.module.css"

function TextInput({ id, label, infoLink, ...rest }) {
  const generatedId = React.useId()
  const inputId = id || generatedId

  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
        {infoLink && (
          <a
            href={infoLink}
            aria-label={`Get more info about the ${label} property`}
            target='_blank'
            rel='noreferrer'
          >
            <Icon icon='info' className={styles.icon} />
          </a>
        )}
      </div>
      <input
        className={styles.input}
        id={inputId}
        type='text'
        autoComplete='off'
        {...rest}
      />
    </div>
  )
}

export default TextInput
