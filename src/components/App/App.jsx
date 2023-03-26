import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"
import TextInput from "../TextInput"
import LinkButton from "../LinkButton"
import InputWrapper from "../InputWrapper"
import { SCHEMA_ATTRIBUTES } from "../../constants"

import styles from "./App.module.css"

const { name, tag, sectionClass, limit } = SCHEMA_ATTRIBUTES

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <InputWrapper>
          <TextInput label={name.label} infoLink={name.docLink} required />
          <TextInput label={tag.label} infoLink={tag.docLink} />
          <TextInput
            label={sectionClass.label}
            infoLink={sectionClass.docLink}
          />
          <TextInput
            label={limit.label}
            infoLink={limit.docLink}
            type='number'
          />
        </InputWrapper>
        <LinkButton>Test button</LinkButton>
      </Main>
      <Footer />
    </div>
  )
}

export default App
