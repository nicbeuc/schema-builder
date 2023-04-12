import * as Dialog from "@radix-ui/react-dialog"
import { X as CloseIcon } from "react-feather"
import LinkButton from "../LinkButton"

function Modal({ title, description, children, ...rest }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <LinkButton>Open Modal</LinkButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content {...rest}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <div>{children}</div>
          <Dialog.Close>
            <CloseIcon />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
