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
            aria-label={`Read the official documentation on the "${label}" property`}
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
        autoComplete='off'
        aria-autocomplete='none'
        onFocus={(e) => {
          e.target.setAttribute("autocomplete", "off")
          e.target.setAttribute("aria-autocomplete", "none")
        }}
        {...rest}
        type='text'
      />
    </div>
  )
}

export default TextInput
