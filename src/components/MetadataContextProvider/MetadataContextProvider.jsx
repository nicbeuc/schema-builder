import React from "react"

export const MetadataContext = React.createContext()

function MetadataContextProvider({ children }) {
  const [name, setName] = React.useState("")
  const [tag, setTag] = React.useState("")
  const [sectionClass, setSectionClass] = React.useState("")
  const [limit, setLimit] = React.useState(0)

  const value = {
    name,
    tag,
    sectionClass,
    limit,
    setName,
    setTag,
    setSectionClass,
    setLimit,
  }

  return (
    <MetadataContext.Provider value={value}>
      {children}
    </MetadataContext.Provider>
  )
}

export default MetadataContextProvider
