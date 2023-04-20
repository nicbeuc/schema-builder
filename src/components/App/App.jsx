import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"
import Step from "../Step"
import MetadataControls from "../MetadataControls"
import MetadataProvider from "../MetadataProvider"
import Modal from "../Modal"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MetadataProvider>
        <Main>
          <Step header='Metadata'>
            <MetadataControls />
          </Step>
          <Step header='Settings'>
            <Modal title={"Test title"} description={"Test desc"}>
              Content in here
            </Modal>
          </Step>
        </Main>
      </MetadataProvider>
      <Footer />
    </div>
  )
}

export default App
