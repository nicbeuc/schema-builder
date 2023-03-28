import styles from "./Step.module.css"

function Step({ header, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>{header}</h2>
      </div>
      <div className={styles.mainWrapper}>{children}</div>
    </div>
  )
}

export default Step
