import React from "react"

export const MetadataContext = React.createContext()

function MetadataProvider({ children }) {
  const [name, setName] = React.useState("")
  const [tag, setTag] = React.useState("div")
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

  console.log(value)

  return (
    <MetadataContext.Provider value={value}>
      {children}
    </MetadataContext.Provider>
  )
}

export default MetadataProvider
