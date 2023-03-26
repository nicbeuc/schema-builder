import React from "react"
import Icon from "../Icon"
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
            aria-label={`Get more info about the ${label} property`}
            target='_blank'
            rel='noreferrer'
            className={styles.icon}
          >
            <Icon icon='info' />
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
