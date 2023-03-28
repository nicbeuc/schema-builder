import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"
import TextInput from "../TextInput"
import LinkButton from "../LinkButton"
import InputWrapper from "../InputWrapper"
import Step from "../Step"
import { SCHEMA_ATTRIBUTES } from "../../constants"

import styles from "./App.module.css"

const { name, tag, sectionClass, limit } = SCHEMA_ATTRIBUTES

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <Step header='Metadata'>
          <InputWrapper>
            <TextInput
              label={name.label}
              infoLink={name.docLink}
              placeholder='Section name'
              required
            />
            <TextInput
              label={tag.label}
              infoLink={tag.docLink}
              placeholder='article'
            />
            <TextInput
              label={sectionClass.label}
              infoLink={sectionClass.docLink}
              placeholder='section-name'
            />
            <TextInput
              label={limit.label}
              infoLink={limit.docLink}
              type='number'
              placeholder={1}
            />
          </InputWrapper>
          <LinkButton>Test button</LinkButton>
        </Step>
      </Main>
      <Footer />
    </div>
  )
}

export default App
