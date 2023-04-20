import * as Dialog from "@radix-ui/react-dialog"
import { X as CloseIcon } from "react-feather"
import LinkButton from "../LinkButton"

import styles from "./Modal.module.css"

function Modal({ title, description, children, ...rest }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <LinkButton>Open Modal</LinkButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content} {...rest}>
          <div className={styles.inner}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Description className={styles.description}>
              {description}
            </Dialog.Description>
            <div className={styles.main}>{children}</div>
            <Dialog.Close className={styles.close}>
              <CloseIcon size={16} className={styles.closeIcon} />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
