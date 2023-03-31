import React from "react"
import * as Label from "@radix-ui/react-label"
import { Info as InfoIcon } from "react-feather"
import styles from "./TextInput.module.css"

function TextInput({ label, placeholder, infoLink, ...rest }) {
  const inputId = React.useId()

  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        <Label.Root className={styles.label} htmlFor={inputId}>
          {label}
        </Label.Root>
        {infoLink && (
          <a
            href={infoLink}
            aria-label={`Read the official documentation on the "${label}" property`}
            target='_blank'
            rel='noreferrer'
            className={styles.icon}
          >
            <InfoIcon size={16} strokeWidth={1.5} />
          </a>
        )}
      </div>
      <input
        type='text'
        autoComplete='off'
        aria-autocomplete='none'
        placeholder={placeholder}
        {...rest}
        className={styles.input}
        id={inputId}
      />
    </div>
  )
}

export default TextInput
