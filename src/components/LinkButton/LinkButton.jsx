import styles from "./LinkButton.module.css"

function LinkButton({ href, children, ...rest }) {
  const Tag = typeof href === "string" ? "a" : "button"

  return (
    <Tag {...rest} href={href} className={styles.button}>
      {children}
    </Tag>
  )
}

export default LinkButton
